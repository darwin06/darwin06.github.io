'use strict';
// * VARS
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));;
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var gcmq = require('gulp-group-css-media-queries');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');

// * Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

// * TASKS

// * Sass
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
  .pipe(sourcemaps.init({ loadMaps: true, largeFile: true }))
  .pipe(sass.sync().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({
        browsers: AUTOPREFIXER_BROWSERS,
        cascade: false
      }),
      require('postcss-flexbugs-fixes')
    ]))
    .pipe(gcmq())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./'))
  .pipe(browserSync.stream());
});

// * CSS
// * =================================
gulp.task('cssmin', function () {
  return gulp.src('./styles.css')
    .pipe(cssnano())
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

// * ESLINT
// * ==================================
gulp.task('eslint', () => {
  return gulp.src(['assets/js/source/**/*.js'])
    .pipe(eslint({
      "extends": "eslint:recommended",
      "rules": {
        "indent": ["error", 2],
        "linebreak-style": ["error", "unix"],
        "camelcase": 1,
        "comma-dangle": ["error", "always"],
        "no-cond-assign": ["error", "always"],
        "eqeqeq": "warn",
        "curly": "error",
        "semi": ["error", "always"],
        "quotes": ["error", "single"]
      },
      globals: [
        'jQuery',
        '$'
      ],
      fix: true
    }))
    .pipe(eslint.format())
    .pipe(eslint.result(result => {
      // Called for each ESLint result.
      console.log(`ESLint result: ${result.filePath}`);
      console.log(`# Messages: ${result.messages.length}`);
      console.log(`# Warnings: ${result.warningCount}`);
      console.log(`# Errors: ${result.errorCount}`);
    }))
    .pipe(eslint.failAfterError());
});

// * CONCAT
// * =================================
gulp.task('concat', function () {
  return gulp.src(['./js/sources/jquery-1.9.0.js', './js/sources/scripts.js'])
    .pipe(concat({ path: 'script.js' }))
    .pipe(gulp.dest('./js/sources/'));
});

// * UGLIFY
// * =================================
gulp.task('scripts', function () {
  return gulp.src('./js/sources/script.js')
    .pipe(rename({
      extname: ".min.js"
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./js'))
    .pipe(browserSync.stream());
});


// * SYNC
// * ===============================
gulp.task('sync', function () {
  browserSync.init({
    server: {
      baseDir: "./",
      serveStaticOptions: {
        extensions: ["html"]
      }
    },
    watch: true
    // proxy: pathDir
  });

  gulp.watch('./sass/**/*.scss', gulp.series(['sass', 'cssmin']));
  gulp.watch(['!js/sources/script.js', './js/sources/**/*.js'], gulp.series(['eslint', 'concat', 'scripts']));
  gulp.watch('**/*.html').on('change', browserSync.reload);

});

// * START WORKFLOW
// * ===============================
gulp.task('default', function () {
  gulp.watch('./sass/**/*.scss', gulp.series(['sass', 'cssmin']));
  gulp.watch('./js/sources/**/*.js', gulp.series(['eslint', 'concat', 'scripts']));
  //gulp.watch('assets/js/source/**/*.js', gulp.series(['scripts']));
});
