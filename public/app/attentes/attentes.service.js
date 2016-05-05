app.factory("AttentesService", ["$resource",  function ($resource) {
    return $resource("http://leclerc.hd.free.fr:8081/api/attentes/:codeLieu", null, null);
}]
);