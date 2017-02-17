var gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    jshint = require('gulp-jshint'),
    runSequence = require('gulp-run-sequence')

gulp.task('buildjs', function() {
    console.log('uglify started')
    return gulp.src(['public/**/*.js', '!public/**/*.min.js'])
        .pipe(concat('app.min.js', {
            newLine: " "
        }))
        .pipe(babel({
            presets: [
                ["es2015", {
                    modules: false
                }]
            ]
        }))
        .pipe(uglify({
            compress: {
                sequences: false
            },
            mangle: false
        }))
        .pipe(gulp.dest('dist/'))
})
gulp.task('lintjs', function() {
    return gulp.src('public/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'))
})

gulp.task('buildcss', function() {
    gulp.src('public/**/*.scss')
        .pipe(concat('css.js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/'))
})

gulp.task('buildhtml', function() {
    gulp.src('public/**/*.html')
        .pipe(gulp.dest('dist/'))
})


gulp.task('watch', function() {
    gulp.watch(['public/**/*.js', '!public/**/*.min.js'], ['lintjs', 'buildjs'])
    gulp.watch(['public/**/*.scss'], ['buildcss'])
    gulp.watch(['public/**/*.html'], ['buildhtml'])
})
gulp.task('build', function() {
    runSequence('lintjs', ['buildjs', 'buildcss', 'buildhtml'], 'watch')
})
gulp.task('default', ['build'])
