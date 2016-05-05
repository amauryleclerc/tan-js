app.controller("HorairesController", ["HorairesService", "$stateParams", function (HorairesService, $stateParams) {

    this.codeArret = $stateParams.codeArret;
    this.numLigne = $stateParams.numLigne;
    this.sens = $stateParams.sens;
    this.horaires = null;
    this.getHoraires = () => {
        HorairesService.get({ codeArret: this.codeArret, numLigne: this.numLigne, sens: this.sens  }, (data) => {
            this.horaires = data;
        });
    }
    this.getHoraires();
}]);