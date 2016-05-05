app.factory("AttentesService", ["$resource",  function ($resource) {
    return $resource("http://localhost:8081/api/attentes/:codeLieu", null, null);
}]
);