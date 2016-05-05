var gulp = require("gulp");
var server = require("gulp-server-livereload");

gulp.task("serve", function(){
    gulp.src("public").pipe(server({
        livereload:true,
        open:true,
        port:3000
    }));
});