
var fs = require('fs');

var stream = fs.createReadStream(process.argv[2] || '');

console.log('Setting up stream listeners');
stream.on('data', function(data) {
    console.log('We have data');
});

stream.on('error', function(err) {
    console.log('We have error', err);
});

stream.on('end', function() {
    console.log('Finished!!');
});

console.log('Done Setting up stream listeners');
