var gulp = require("gulp");
var server = require("gulp-server-livereload");

gulp.task("serve", function(){
    gulp.src("public").pipe(server({
        livereload:false,
        open:false,
        port:3200,
        host:"0.0.0.0"
    }));
});