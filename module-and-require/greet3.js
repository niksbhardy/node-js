function GreetConstructor() {
    this.greeting = "Hello from greet3!!!";
    this.greet = function() {
        console.log(this.greeting);
    }
}
//exporting the ability to instantiate an object of GreetConstructor.
module.exports = new GreetConstructor();