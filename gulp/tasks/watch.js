/* ASSIGNING PACKAGES TO VARIABLES */
var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();



/*GULP WATCH TASKS */
gulp.task('watch', function() {

	browserSync.init({
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function(){
		browserSync.reload();
	});
	watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');

	});
});



/* CSS INJECT TASK */
gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());

});