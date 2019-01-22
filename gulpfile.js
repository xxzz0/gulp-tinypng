var gulp = require('gulp');
var del=require('del');
var changed = require('gulp-changed');
// var tinypng = require('gulp-tinypng');
var tinypng = require('gulp-tinypng-compress');

gulp.task('del',function(cb){
    del('dist/**/*');
    cb();
});

// key
// 67H2tGlxgdW3nnxKVCWL2BQKdjXPFYCv
// cvZGKFhpdqwtzW3958PcLNN3XML6JNmJ
gulp.task('tinypng', function (cd) {
    gulp.src('src/**/*.{png,jpg,jpeg}')
        .pipe(changed('dist/'))
        .pipe(tinypng({
            key: '67H2tGlxgdW3nnxKVCWL2BQKdjXPFYCv',
            sigFile: 'images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('dist/'));
    cd();
});

gulp.task('default',gulp.series('tinypng')); //定义默认任务 
