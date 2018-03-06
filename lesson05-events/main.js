var events=require("events");
var eventEmitter=new events.EventEmitter();
// creating an event handler to respond when event is triggered
var myEventHandler = function(){
    console.log("is there a scream ?!");
}

console.log("Before scream :)");
// registering above Event handler with the event.
eventEmitter.on('scream',myEventHandler);
// emitting the event, hence corresponding event handelr can respond.
eventEmitter.emit('scream');
