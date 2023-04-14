const { task, src, dest, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const { watch } = require('gulp');
const browserSync = require('browser-sync');
const htmlMin = require('gulp-html-minifier-terser');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const sourcemap = require("gulp-sourcemaps");
const concat = require('gulp-concat');

task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify: false
    });
});

task('edit', () => {
    return src('src/*.html')
        .pipe(browserSync.reload({ stream: true }));
});

task('js-script', () => {
    return src('src/js/main.js')
        .pipe(browserSync.reload({ stream: true }));
});

task('js', () => {
    return src(['node_modules/jquery/dist/jquery.min.js', 'src/js/main.js'])
        .pipe(concat('script.js'))
        .pipe(dest('src/js/'))
        .pipe(browserSync.reload({ stream: true }));
});

task('sass', () => {
    return src('src/sass/style.scss')
        .pipe(sourcemap.init())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(sourcemap.write("."))
        .pipe(dest('src/css'))
        .pipe(browserSync.reload({ stream: true }));
});

task('css', () => {
    return src('src/sass/style.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('dist/css'));
});

task('html', () => {
    return src('src/*.html')
        .pipe(replace('style.css', 'style.min.css'))
        .pipe(replace('script.js', 'script.min.js'))
        .pipe(htmlMin({ collapseWhitespace: true }))
        .pipe(dest('dist'));
});

task('uglify', () => {
    return src('src/js/script.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('dist/js'));
});

task('imagemin', () => {
    return src('src/img/*')
        .pipe(imagemin())
        .pipe(dest('dist/img'));
});

task('watch', () => {
    watch('src/*.html', parallel('edit'));
    watch('src/sass/style.scss', parallel('sass'));
    watch('src/js/main.js', parallel('js', 'js-script'));
});

task('build', series('html', 'css', 'uglify', 'imagemin'));

task('default', parallel('sass', 'browser-sync', 'js', 'js-script', 'watch'));