app.controller("ArretsController", ["ArretsService", "$geolocation", function (ArretsService, $geolocation) {


    this.arrets = [];
    this.getArrets =  () =>{
        $geolocation.getCurrentPosition({
            timeout: 60000
        }).then((position) => {
            var longitude = new String(position.coords.longitude).replace(".", ",");
            var latitude = new String(position.coords.latitude).replace(".", ",");
            ArretsService.query({ latitude: latitude, longitude: longitude },  (data)  =>{
                this.arrets = data;
            });
        });
    }
    this.getArrets();
}]);