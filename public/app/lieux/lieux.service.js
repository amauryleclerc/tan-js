app.factory("LieuxService", ["$resource",  function ($resource) {
    return $resource("http://localhost:8081/api/lieux", null, null);
}]
);