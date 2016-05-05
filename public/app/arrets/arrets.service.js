app.factory("ArretsService", ["$resource",  function ($resource) {
    return $resource("http://localhost:8081/api/arrets", null, null);
}]
);