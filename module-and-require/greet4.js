function GreetConstructor() {
    this.greeting = "Hello from greet4!!!!";
    this.greet = function() {
        console.log(this.greeting);
    }
}
//exporting the ability to instantiate multiple objects of GreetConstructor.
module.exports = GreetConstructor;