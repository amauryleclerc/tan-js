app.controller("LieuxController", ["LieuxService", "$geolocation", function (LieuxService, $geolocation) {

    this.longitude = "-1,556754";
    this.latitude = "47,21661";
    this.lieux = [];
    this.getLieux =  () =>{
     /*   $geolocation.getCurrentPosition({
            timeout: 60000
        }).then((position) => {
            var longitude = new String(this.longitude).replace(".", ",");
            var latitude = new String(this.latitude).replace(".", ",");
            LieuxService.query({ latitude: latitude, longitude: longitude },  (data)  =>{
                this.lieux = data;
            });
        });*/
          LieuxService.query({ latitude: this.latitude,  longitude: this.longitude },  (data)  =>{
                this.lieux = data;
            });
    }
    this.getLieux();
}]);