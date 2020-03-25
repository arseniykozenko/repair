var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

gulp.task('sass', function(done) {
    gulp.src('./src/sass/style.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({
        errorLogToConsole: true,
        outputStyle: 'compressed'
    }))
    .on('error', console.error.bind(console))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./src/css/'))
    done();
});

gulp.task('watch', function() {
    gulp.watch('./src/sass/**/*', gulp.series('sass'));
});

gulp.task('minify-css', function(done) {
    return gulp.src('./src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCss({
        compatibility: 'ie8'
    }))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/css/'))
    done();
});

gulp.task('minify-js', function(done) {
    return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('dist/js/'))
    done();
});

gulp.task('htmlmin', function(done) {
    return gulp.src('./src/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'))
    done();
});

gulp.task('fonts', function(done) {
    return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts/'))
    done();
});

gulp.task('tinypng', function (done) {
    return gulp.src('./src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinypng({
        key: 'ZqWDjy1976GK0fhY4wWWzS8q1vXk5h7s',
    }))
    .pipe(gulp.dest('dist/img/'));
    done();
});

gulp.task('default', gulp.series('minify-css', 'minify-js', 'fonts', 'htmlmin', 'tinypng', function(done) {
    done();
}));