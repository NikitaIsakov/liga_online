var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    rigger = require('gulp-rigger'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    uncss = require("gulp-uncss"),
    postcss = require("gulp-postcss"),
    pug = require("gulp-pug"),
    reload = browserSync.reload;

var path = {
  build: { 
    pug: 'build/',
    html: 'build/',
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/img/',
    fonts: 'build/fonts/'
  },
  src: { 
    pug: 'src/pug/pages/index.pug',
    html: 'src/*.html', 
    js: 'src/js/main.js', 
    style: 'src/css/main.sass',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  watch: { 
    pug: 'src/pug/pages/index.pug',
    html: 'src/**/*.html',
    js: 'src/js/**/*.js',
    style: 'src/css/**/*.*',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  clean: './build'
};

var config = {
  server: {
    baseDir: "./build"
  },
  notify: false,
  tunnel: true,
  host: 'localhost',
  port: 9000
};

gulp.task('pug:build', function(){
   gulp.src(path.src.pug)
    .pipe(pug( {
      pretty:true 
      }))
    .pipe(gulp.dest(path.build.pug))
    .pipe(reload({ stream: true })); 
  })

gulp.task('html:build', function() {
  gulp.src(path.src.html) 
    .pipe(rigger()) 
    .pipe(gulp.dest(path.build.html)) 
    .pipe(reload({ stream: true })); 
});

gulp.task('js:build', function() {
  gulp.src(path.src.js) 
    .pipe(rigger()) 
    .pipe(uglify()) 
    .pipe(gulp.dest(path.build.js)) 
    .pipe(reload({ stream: true })); 
});

gulp.task('style:build', function() {
  gulp.src(path.src.style)
    .pipe(sass()) 
    .pipe(prefixer())
    .pipe(gulp.dest(path.build.css)) 
    .pipe(reload({ stream: true }));
});

gulp.task('image:build', function() {
  gulp.src(path.src.img) 
    .pipe(imagemin({ 
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest(path.build.img)) 
    .pipe(reload({ stream: true }));
});

gulp.task('fonts:build', function() {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
  'pug:build',
  'html:build',
  'js:build',
  'style:build',
  'fonts:build',
  'image:build'
]);

gulp.task('watch', function() {
   watch([path.watch.pug], function(event, cb) {
    gulp.start('pug:build');
  });
  watch([path.watch.html], function(event, cb) {
    gulp.start('html:build');
  });
  watch([path.watch.style], function(event, cb) {
    gulp.start('style:build');
  });
  watch([path.watch.js], function(event, cb) {
    gulp.start('js:build');
  });
  watch([path.watch.img], function(event, cb) {
    gulp.start('image:build');
  });
  watch([path.watch.fonts], function(event, cb) {
    gulp.start('fonts:build');
  });
});

gulp.task('webserver', function() {
  browserSync(config);
});

gulp.task('clean', function(cb) {
  rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);
