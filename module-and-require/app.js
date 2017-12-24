var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
//change the greeting property
greet3.greeting = "Hello world changed in greet3";
greet3.greet();

/*
this should make a new object but actually it doesn't. 
It actually takes the reference of the existing cached object greet3.
This means the object creation through constructor will be called only once in this case 
and will be cached for future uses.
*/
greet3b = require('./greet3');
//Therefore this will not give the original constructor greeting property 
//but the one modified above and stored in the cache.
greet3b.greet();

//Now modify the same greeting property using greet3b object.
//The existing cached object property will get modified.
greet3b.greeting = "Hello world changed from greet3b";
greet3b.greet();
//greet3 will also show the same result.
greet3.greet();

//Now to get the ability to create new object we require constructor itself and not the new object.
//Greet4 is the constructor imported here
var Greet4 = require('./greet4');
//create new object here instead for importing from other source.
var grtr = new Greet4();
grtr.greet();
//now modify its greeting property.
grtr.greeting = "Hello changed in grtr only";
grtr.greet();

//create a new object again from Greet4 constructor.
var grtrb = new Greet4();
//now check the greetning. This should be original greeting property.
grtrb.greet();

//Here we can only access function object imported from greet5. Cannot modify any property.
//THIS IS REVEALING MODULE PATTERN. REVEALING ONLY THE OBJECTS THAT ARE REQUIRED 
var greet5 = require('./greet5').greet;
greet5();
