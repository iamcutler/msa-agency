var path = require('path');

if(process.env.RAILS_ENV !== 'production') {
    var gulp = require('gulp');
    var Server = require('karma').Server;

    gulp.task('test', function(done) {
        new Server({
            configFile: path.resolve(__dirname, '../../karma.conf.js'),
            singleRun: true
        }, done).start();
    });

    gulp.task('tdd', function(done) {
        new Server({
            configFile: path.resolve(__dirname, '../../karma.conf.js')
        }, done).start();
    });
}
