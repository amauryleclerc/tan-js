app.factory("TestService", ["$resource",  function ($resource) {
    return $resource("http://open.tan.fr/ewp/arrets.json/47,21661/-1,556754", null, null);

  
}]
);