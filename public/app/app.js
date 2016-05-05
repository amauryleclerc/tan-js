var app = angular.module("animepedia", ["ui.router", "ui.bootstrap", "ngResource","ngGeolocation"]);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("lieux", {
        url: "/lieux", templateUrl: "app/lieux/lieux.html", controller: "LieuxController", controllerAs: "lieuxController"
    }).state("attentes", {
        url: "/attentes/:codeLieu", templateUrl: "app/attentes/attentes.html", controller: "AttentesController", controllerAs: "attentesController"
    });
    $urlRouterProvider.otherwise("/lieux");
});

