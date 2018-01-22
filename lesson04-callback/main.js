var fs = require("fs");
var startTime = Date.now();
console.log(startTime);

var data =  fs.readFileSync('input.txt');
console.log(data.toString());
var endTime = Date.now();

console.log('>>> End of sync read :: ' + (endTime - startTime));


startTime = Date.now();
console.log(startTime)

fs.readFile('input.txt',function(err,data){
    if(err) return console.log(err);
    console.log(data.toString());
});
endTime = Date.now();

console.log('>>> End of async read :: ' + (endTime - startTime));