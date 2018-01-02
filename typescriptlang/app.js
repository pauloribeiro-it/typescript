var fullName = 'Bob Bobbington';
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
//tuple
var x;
// Initialize it
x = ["hello", 10]; // OK
console.log(x[0]);
//void function
function warnUser() {
    alert("This is my warning message");
}
//undefined and null
var u = undefined;
var n = null;
// NO RETURN POSSIBILITY
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
//CAST
var someValue = "this is a string";
var strLength = someValue.length;
var strLengthAs = someValue.length;
console.log(strLength);
console.log(strLengthAs);
