let gulp = require('gulp')

gulp.task('folder_creator', function(cb) {
	
	return gulp.src('*.*',{read:false})
	.pipe(gulp.dest('./papka1'))
	.pipe(gulp.dest('./papka2'))
	.pipe(gulp.dest('./papka3'))
	.pipe(gulp.dest('./papka4'))
	.pipe(gulp.dest('./papka5'))
	.pipe(gulp.dest('./papka6'))

	cb();
}
 