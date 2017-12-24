var greeting = "Hello world from greet5";

function greet() {
    console.log(greeting);
}
/*
Here we are exporting the greet function only and not the variable greeting and thus maintaing
the privacy of the greeting variable. Export is being done through json format. 
THIS IS REVEALING MODULE PATTERN. REVEALING ONLY THE OBJECTS THAT ARE REQUIRED. 
*/
module.exports = {
    greet: greet
}