app.factory("HorairesService", ["$resource",  function ($resource) {
    return $resource("http://leclerc.hd.free.fr:8081/api/horaires/:codeArret/:numLigne/:sens", null, null);
}]
);