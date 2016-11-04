const gulp = require('gulp');
const del = require('del');

// Clean libs in lib folder
gulp.task('clean', function () {
  return del('lib');
});

// Copy dependencies to libs
gulp.task('copy:libs', ['clean'], function() {
  return gulp.src([
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
	  'node_modules/reflect-metadata/Reflect.js',
	  'node_modules/systemjs/dist/system.src.js' 
    ])
    .pipe(gulp.dest('lib'))
});
   