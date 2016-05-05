var app = angular.module("animepedia", ["ui.router", "ui.bootstrap", "ngResource","ngGeolocation"]);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("arrets", {
        url: "/arrets", templateUrl: "app/arrets/arrets.html", controller: "ArretsController", controllerAs: "arretsController"
    });
    $urlRouterProvider.otherwise("/arrets");
});

