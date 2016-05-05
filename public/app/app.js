var app = angular.module("animepedia", ["ui.router", "ui.bootstrap", "ngResource","ngGeolocation"]);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("lieux", {
        url: "/lieux", templateUrl: "app/lieux/lieux.html", controller: "LieuxController", controllerAs: "lieuxController"
    });
    $urlRouterProvider.otherwise("/lieux");
});

