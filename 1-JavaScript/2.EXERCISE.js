// A common task in programming is to combine bits of static text with variables to create a single, 
// longer string. The traditional way to assemble this kind of string is with the concatentation 
// operator +, as shown here:
let firstName  "Joe"
let lastName = "Smith"
let team = "AWD"
let employeeDetail = 'Our team includes ' + firstName + ' '  lastName +
 ' who works on the ' + team + " team.";
console.log(employeeDetail)

// A different approach is to use template literals, a type of string literal that allows embedded expressions. 
// To create a template literal, just replace your standard string delimeters (apostrophes or double quotes)
// with the backtick (`) character:
const greeting = `Hello world from a template literal!`;

// Now you can insert your variables directly into your template literal. All you need to do is wrap each variable in 
// curly braces, preceded by a dollar sign, like ${firstName}. This is called an expression.

// Fix this:
employeeDetail = `Our team includes ${firstName} {lastName} who works on the $team team.`

let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;
 
console.log("str", type str);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unknown", typeof unknown);

let nr1 = 4;
nr1+;    // Increment by 1
console.log(nr1);
let nr2 = 4;
nr2-;  // Decrement by 1
console.log(nr2);

let arr2 = ["green", "orange", "pink"];
arr2[?] = "blue"    // Add to arr2
console.log(arr2)

const arr = ["hi there"];
arr[0] = "new value";
console.log(arr[0]);
 
arr = ["nope, now you are overwriting the array"]; // Why does this not work?????

let cars = ["Toyota", "Renault", "Volkswagen"];
console.log(cars[100]);       // Should print Toyota

let colours = ["green", "orange", "pink"]
let booleans = [true, false, false, true];
let emptyArray = [];
console.log("Length of colours:", colours.lengt);
console.log("Length of booleans:", booleanslength);
console.log("Length of empty array:", emptyArray.length);

let lastElement = colours[colours.length ? ?]; // last element of array using length
console.log( lastElement)


