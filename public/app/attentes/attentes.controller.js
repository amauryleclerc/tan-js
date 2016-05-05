app.controller("AttentesController", ["AttentesService", "$stateParams", function (AttentesService, $stateParams) {

    this.codeLieu = $stateParams.codeLieu;
    this.attentes = [];
    this.getAttentes = () => {
        AttentesService.query({ codeLieu: this.codeLieu }, (data) => {
            this.attentes = data;
        });
    }
    this.getAttentes();
}]);

