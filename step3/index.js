
var fs = require('fs');

var fileToRead = process.argv[2];

if (fileToRead) {
    var contents = JSON.parse(fs.readFileSync(fileToRead, 'UTF-8'));
    console.log('Size of Contents', contents.length);

    console.log('Pre Read File Async');
    fs.readFile(fileToRead, 'UTF-8', function(err, data) {
        console.log('Error ', err);
        console.log('Data ', data);
    });
    console.log('Post Read File Async');

}