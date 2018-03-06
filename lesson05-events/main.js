var events=require("events");
var eventEmitter=new events.EventEmitter();

var myEventHandler = function(){
    console.log("is there a scream ?!");
}

console.log("Before scream :)");
eventEmitter.on('scream',myEventHandler);

eventEmitter.emit('scream');
