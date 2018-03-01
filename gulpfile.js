// Include gulp
var gulp = require("gulp");

// Include plugins
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var clean = require("gulp-clean-css");


// Tasks

// Compile SASS/SCSS from styles and minify CSS into dist directory
gulp.task("sass", function() {
    return gulp.src("styles/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("styles"))
    .pipe(rename("main.min.css"))
    .pipe(clean())
    .pipe(gulp.dest("dist/css"))
});

// Compile from App
gulp.task("app", function() {
    return gulp.src("app/app.scss")
    .pipe(sass())
    .pipe(rename("app.min.css"))
    .pipe(clean())
    .pipe(gulp.dest("dist/css"))
});

// Concatenate and minify JS from scripts into dist directory
gulp.task("scripts", function(){
    return gulp.src("scripts/*.js")
    .pipe(concat("all.js"))
    .pipe(gulp.dest("dist/js"))
    .pipe(rename("all.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
});


// Watch files for saved changes
var isWatching = false;

gulp.task("watch", function(){
    isWatching = true;
    gulp.watch("scripts/.js", ["scripts"]);
    gulp.watch("styles/*.scss", ["sass"]);
    gulp.watch("app/*.scss", ["app"]);
});
gulp.on('stop', function() {
    if (!isWatching) {
        process.nextTick(function() {
            process.exit(0);
        });
    }
});

/*Default task is a group reference to other tasks
* Run using gulp command
*/
 gulp.task("default", ["app","sass", "scripts", "watch"]);