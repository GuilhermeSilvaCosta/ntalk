const forever = require('forever-monitor');
const Monitor = forever.Monitor;

const child = new Monitor('app.js', {
    max: 10,
    silent: true,
    killTree: true,
    logFile: 'forever.log',
    outFile: 'app.log',
    errFile: 'error.log'
});

child.on('exit', function(){
    console.log('O servidor foi finalizado.');
});

child.start();