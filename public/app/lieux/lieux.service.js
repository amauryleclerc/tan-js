app.factory("LieuxService", ["$resource",  function ($resource) {
    return $resource("http://leclerc.hd.free.fr:8081/api/lieux", null, null);
}]
);