app.controller("LieuxController", ["LieuxService", "$geolocation", function (LieuxService, $geolocation) {


    this.lieux = [];
    this.getLieux =  () =>{
        $geolocation.getCurrentPosition({
            timeout: 60000
        }).then((position) => {
            var longitude = new String(position.coords.longitude).replace(".", ",");
            var latitude = new String(position.coords.latitude).replace(".", ",");
            LieuxService.query({ latitude: latitude, longitude: longitude },  (data)  =>{
                this.lieux = data;
            });
        });
    }
    this.getLieux();
}]);