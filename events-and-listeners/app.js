var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    /*
    this statement completes our inheritence objective. 
    It helps to inherit constructor properties of EventEmitter.
    Also 'hasOwnProperty' function will return true for every property
    of EventEmitter when being called upon Greetr. 
    */
    EventEmitter.call(this);
    this.greeting = "Hello from Greetr,";
}

//Greetr constructor inherits from EventEmitter prototype properties. 
//Thus a prototype chain formed.
util.inherits(Greetr, EventEmitter);

//adding property to Greetr
Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ` ${data}`);
    //since Greetr inherits from EventEmitter Greetr is also an EventEmitter object and 
    //hence it can emit.
    this.emit('greet', data);
}

//making a instance of type Greetr
var greeter1 = new Greetr();
//listner function A
var callbackA = function(data) {
    console.log("Hello from callbackA,"+ ` ${data}`);
}
//listner function B
var callbackB = function(data) {
    console.log("Hello from callbackB,"+ ` ${data}`);
}
//registering listeners to greet function
greeter1.on('greet', callbackA);
greeter1.on('greet', callbackB);

//calling greet function to emit. greet is a prototype property.
greeter1.greet('John');

//give listener count for greeter1 emitter's greet function
console.log("Listeners: " + EventEmitter.listenerCount(greeter1, 'greet'));

//removing listener A
greeter1.removeListener('greet', callbackA);

// 1 listener has been removed now
console.log("Listeners after removal: " + EventEmitter.listenerCount(greeter1, 'greet'));
greeter1.greet('John');