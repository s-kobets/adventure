var gulp = require('gulp');
var concat = require('gulp-concat');//склеивает файлы
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');//минифицирует js
var plumber = require('gulp-plumber');//отслеживает и при ошибках дает сработать всему остальному
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var webserver = require('gulp-webserver');
var notify = require("gulp-notify");//сообщение о выполненом действии
var jade = require('gulp-jade');
var nib = require('nib'); //Mixins для Stylus
var stylus = require('gulp-stylus');

gulp.task('default', ['jade', 'stylus', 'cssMin', 'uglify', 'imageMin', 'webserver', 'watch']);

gulp.task('jade', function() {
    gulp.src('./assets/templates/pages/index.jade')
		.pipe(plumber())
        .pipe(jade({
            pretty: true
        }))  // Собираем Jade только в папке ./assets/template/ исключая файлы с _*
        .on('error', console.log) // Если есть ошибки, выводим и продолжаем
    .pipe(gulp.dest('./public/')) // Записываем собранные файлы
	.pipe(notify("Done jade!"));    
});

gulp.task('stylus', function() {
 gulp.src('./assets/styles/common.styl')
  .pipe(plumber())
  .pipe(stylus({
    use: (nib())
  }))
  .on('error', console.log)  
  .pipe(gulp.dest('./assets/css/'))
  .pipe(notify("Done stylus!"));
});

gulp.task('cssMin', function() {
 gulp.src('./assets/css/*.css')
	.pipe(plumber())
	.pipe(concat('all.min.css'))
	.pipe(autoprefixer())
	.pipe(cssmin())
	.pipe(gulp.dest('./public/css/'))
	.pipe(notify("Done cssMin!"));
});

gulp.task('uglify', function() {
 gulp.src(['./assets/scripts/jquery-2.1.3.js', './assets/scripts/jquery.lazyload.js', './assets/scripts/*.js'])			 
	.pipe(plumber())
	.pipe(concat('all.min.js'))
    .pipe(uglify({
		compress:true
	}))
    .pipe(gulp.dest('./public/js/'))
	.pipe(notify("Done uglify!"));
});

gulp.task('imageMin', function() {
 gulp.src('./assets/images/**/*.*')
	.pipe(plumber())//отслеживает и при ошибках дает сработать всему остальному
	.pipe(imagemin({
		optimizationLevel: 7
	}))	
	.pipe(gulp.dest('./public/images/'))
	.pipe(notify("Done imageMin!"));
});

gulp.task('webserver', function() {
 gulp.src('./') //указываем всю папку moi_start(по другому не фурычит)
	.pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
	  port: 9000
    })); 
});

gulp.task('watch', function() {
	gulp.watch('./assets/**/*.jade', ['jade']);
	gulp.watch('./assets/**/*.styl', ['stylus']);
	gulp.watch('./assets/**/*.css', ['cssMin']);
	gulp.watch('./assets/**/*.js', ['uglify']);
	gulp.watch('./assets/images/**/*.*', ['imageMin']);
});




