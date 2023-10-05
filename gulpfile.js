const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const browserSync = require("browser-sync").create();

function style () {
    return gulp.src("./project/scss/**/*.scss") // Находим наш scss файл
            .pipe(sass())               // Выполняем sass - в параментрах можно предать минификацию и т.д (смотри документацию в и-нете)
            .pipe(gulp.dest("./project/css"))   // Куда мы положем сконвертированый файл
            .pipe(browserSync.stream())
}

function watch () {
    /* browserSync.init({
        server: {
            baseDir: "./"
        }
    }) */
    gulp.watch("./project/scss/**/*.scss", style); // .watch("A", B) - Если изменяется файл A віполняем B
    /* gulp.watch("./*.html").on("change", browserSync.reload); */ // Находим все html, и когда изменяется html перезапускаем browserSync
}
exports.style = style;
exports.watch = watch;