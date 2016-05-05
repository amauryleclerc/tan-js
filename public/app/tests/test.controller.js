app.controller("TestController", ["TestService",function(TestService){
    this.name = "Amaury";
    this.show = function(name){
        alert(name);
        TestService.query(function(data){
            console.log(data);
        });
    }
}]);