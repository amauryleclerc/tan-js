var app = angular.module("tan-js", ["ui.router", "ui.bootstrap", "ngResource","ngGeolocation"]);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("lieux", {
        url: "/lieux", templateUrl: "app/lieux/lieux.html", controller: "LieuxController", controllerAs: "lieuxController"
    }).state("attentes", {
        url: "/attentes/:codeLieu", templateUrl: "app/attentes/attentes.html", controller: "AttentesController", controllerAs: "attentesController"
    }).state("horaires", {
        url: "/horaires/:codeArret/:numLigne/:sens", templateUrl: "app/horaires/horaires.html", controller: "HorairesController", controllerAs: "horairesController"
    });
    $urlRouterProvider.otherwise("/lieux");
});

