var fs = require("fs");
var startTime = Date.now();
console.log(startTime);
// reading content from input.txt file
var data =  fs.readFileSync('input.txt');
console.log(data.toString());
var endTime = Date.now();
// lets understand how much time is taken to read the input.txt file.
console.log('>>> End of sync read :: ' + (endTime - startTime));


startTime = Date.now();
console.log(startTime)
// now reading the same file with call back mechanism by following async pattern.
fs.readFile('input.txt',function(err,data){
    if(err) return console.log(err);
    console.log(data.toString());
});
endTime = Date.now();
// Lets understand the time taken to read the file in async way.
console.log('>>> End of async read :: ' + (endTime - startTime));