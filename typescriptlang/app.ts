let fullName: string = 'Bob Bobbington';
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
console.log(sentence);


//tuple
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
console.log(x[0]);

//void function
function warnUser(): void {
    alert("This is my warning message");
}

//undefined and null
let u: undefined = undefined;
let n: null = null;

// NO RETURN POSSIBILITY
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}


//CAST

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

let strLengthAs: number = (someValue as string).length;

console.log(strLength);

console.log(strLengthAs);