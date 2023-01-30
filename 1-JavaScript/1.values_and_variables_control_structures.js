// This is a comment in JavaScript.

// You can run this file by typing the folowing at the terminal:
// node <filename>
// e.g node test.js

/*
  This comment spans
  multiple
  lines 
 */

//======================
// Variable Declarations
//======================
// You can store a value in a variable with the let statement:
let x = 11     

// I can print this to the console
console.log(x) 

// Given a value, you can find its type with the typeof operator that returns a string,
// 'number', 'boolean', 'undefined', 'object', 'string', 'symbol', or one of a small 
// number of other strings.
typeof x
console.log( typeof x )     // -> number

// If you do not initialize a variable, it has the special value 'undefined':
let y
console.log( typeof y )     

// If you never change the value of a variable, you should declare it with a const statement:
const PI = 3.141592653589793
console.log( "PI = ", PI )

// Avoid two obsolete forms of variable declarations, with the 'var' keyword and with no keyword at all:
// var do_not_do_this
// do_not_do_this

//========
// Numbers
//========
// To convert a string to a number, you can use the parseFloat or parseInt functions:
const notQuitePi = parseFloat('3.14') // The number 3.14
const evenLessPi = parseInt('3')      // The integer 3

// The toString method converts a number back to a string:
const notQuitePiString = notQuitePi.toString()  // The string '3.14'
const evenLessPiString = (3).toString()         // The string '3'

// You can combine assignment and arithmetic operations:
let counter = 9
counter += 10 // The same as counter = counter + 10

// The ++ and -- operators increment and decrement a variable:
counter++ // The same as counter = counter + 1

// The + operator is also used for string concatenation. 
// If s is a string and x a value of any type, then s + x and x + s are strings, 
// obtained by turning x into a string and joining it with s.
let c = 7
let agent = '00' + c // The string '007'

//===============
// Boolean Values
//===============
// The Boolean type has two values, false and true. 
// Use actual Boolean values for all conditions.
let cond = true
let result = 5 > 7
console.log( result )

//==================
// Template Literals
//==================
// Template literals are strings that can contain expressions and span multiple lines. 
// These strings are delimited by backticks (`. . .`). 
let destination = 'world' // A regular string
let greeting = `Hello, ${destination.toUpperCase()}!` // A template literal
// The embedded expressions inside ${. . .} are evaluated, converted to a string if necessary, and spliced into the template.
console.log( greeting )

// Any newlines inside the template literal are included in the string.
greeting = `<div>Hello</div>
<div>${destination}</div>`
console.log( greeting )

//========
// Objects
//========
// A JavaScript object is simply a set of name/value pairs or “properties,” like this:
const harry = { name: 'Harry Smith', age: 22 }

// You can access the object properties with the usual dot notation:
let harrys_age = harry.age

// You can modify existing properties or add new properties:
harry.age = 23
harry.salary = 9000000000
console.log( harry )

// The harry variable was declared as const, but as you just saw, 
// you can mutate the object to which it refers. 
// However, you cannot assign a different value to a const variable.
const sally = { name: 'Sally Lee' }
sally.age = 28 // OK—mutates the object to which sally refers
// sally = { name: 'Sally Albright' } // ERROR — cannot assign a different value to a const variable

// Use the delete operator to remove a property:
delete harry.salary

//======================
// Object Literal Syntax
//======================
// An object literal can have a trailing comma. This makes it easy to add other properties as the code evolves:
// Quite often, when declaring an object literal, property values are stored in variables whose names 
// are equal to the property names. For example,
let age = 23
let harry1 = { name: 'Harry Smith', age: age } // The 'age' property is set to the value of the age variable

// There is a shortcut for this situation:
let harry2 = { name: 'Harry Smith', age } // The age property is now 23

//=======
// Arrays
//=======
const numbers = [1, 2, 3]  // This is an object with five properties: '0', '1', '2', '3', and 'length'.

// The length property is one more than the highest index, converted to a number. 
// The value of numbers.length is the number 4.
console.log( numbers.length )

// Array indices start counting from 0
console.log( numbers[1] )

//=====
// JSON
//=====
// The JavaScript Object Notation or JSON is a lightweight text format for exchanging object data between 
// applications (which may or may not be implemented in JavaScript).

// In a nutshell, JSON uses the JavaScript syntax for object and array literals, with a few restrictions:
//   - Values are object literals, array literals, strings, floating-point numbers, and the values true, false, and null.
//   - All strings are delimited by double quotes, not single quotes.
//   - All property names are delimited by double quotes.
//   - There are no trailing commas or skipped elements.
let json_string = { "name": "Harry Smith", "age": 32, "numbers": [17, 29], "is_ai": false }

// The JSON.stringify method turns a JavaScript object into a JSON string, and 
// JSON.parse parses a JSON string, yielding a JavaScript object. These methods are commonly used when communicating 
// with a server via HTTP.
console.log(JSON.stringify(harry))

//==============
// Destructuring
//==============
let pair = [101, 202]
// Of course, you can get the elements like this:
pair[0]
pair[1]

// With destructuring, this becomes:
let [first, second] = pair
console.log( "First =", first, " and second = ", second )

// Destructuring for objects is similar. Use property names instead of array positions:
let harry3 = { name: 'Harry', age: 23 }
let { name: harrys_name, age: harrysage } = harry
// This code snippet declares two variables harrys_name and harrysage and initializes 
// them with the name and age property values of the right-hand side object.

// Destructuring with objects is most compelling when the property has the same name as the variable. 
// In that case, you can omit the property name and colon. This statement declares two variables name 
// and age and initializes them with the identically named properties of the object on the right-hand side:
let { name, hage } = harry
// That is the same as:
let { name: name1, age: age1 } = harry
// or, of course,
let name2 = harry.name
let age2 = harry.age

//==================
// Rest Declarations
//==================
// When destructuring an array, you can capture any remaining elements into an array. 
// Add a prefix ... before the variable name.
let nums = [1, 7, 2, 9]
let [f, s, ...others] = nums // f is 1, s is 7, and others is [2, 9]

// A rest declaration also works for objects:
let { name3, ...allButName } = harry // allButName is { age: 22 }

//=========
// Defaults
//=========
// For each variable, you can provide a default that is used if the desired value is not 
// present in the object or array, or if the value is undefined. Put = and an expression 
// after the variable name:
let [fst, snd = 0] = [22]
  // Sets fst to 22, snd to 0 since the right-hand side has no matching element
let { nickname = 'None' } = harry // Sets nickname to 'None' since harry has no nickname property

let config = { separator: '; ' }
const { separator = ',', leftDelimiter = '[', rightDelimiter = ']' } = config
console.log( separator )
// In the example, the separator variable is initialized with the custom separator, 
// and the default delimiters are used because they are not supplied in the configuration.

//=========
// Branches
//=========
let performance
let bonus
let your_sales = 100
let target = 85
if (your_sales > target) {
  performance = 'Good'
  bonus = 100
} else {
  performance = 'Mediocre'
  bonus = 0
}
console.log("Performance = ", performance, " and bonus = ", bonus)

// If the else clause is another if statement, the following format is conventionally used:
if (your_sales > 2 * target) {
  performance = 'Excellent'
  bonus = 1000
} else if (your_sales > target) {
  performance = 'Good'
  bonus = 100
} else {
  performance = 'Mediocre'
  bonus = 0
}

// Braces are not necessary around single statements:
if (your_sales > target)
  bonus = 100

  //===================
// Conditional Operator
//=====================
// '? :' operator is called the “conditional” operator. The expression condition '? first : second'
// evaluates to first if the condition is fulfilled, second otherwise.
let a = 77
let b = 100
let max = a > b ? a : b

//================================
// Comparison and Equality Testing
//================================
// JavaScript has the usual assortment of comparison operators:
// <  less than
// <= less than or equal
//>  greater than
//>= greater than or equal
let aa = 3 < 4 // true
let bb = 3 >= 4 // false

// The same operators also compare strings, using lexicographic order.
'Hello' < 'Goodbye' // false — H comes after G
'Hello' < 'Hi'      // true — e comes before i

// Use these operators to test for equality:
// === strictly equal to
// !== not strictly equal to
'42' === 42         // false — different types
undefined === null  // false
'42' === '4' + 2    // true — same string value '42'

// Equality of objects (including arrays) means that the two operands refer to the same object. 
// References to different objects are never equal, even if both objects have the same contents.
let harry4 = { name: 'Harry Smith', age: 22 }
let harry5 = harry4
console.log( harry4 === harry5) // true — two references to the same object
let harry6 = { name: 'Harry Smith', age: 22 }
console.log( harry4 === harry6 ) // false — different objects

//==================
// Boolean Operators
//==================
// JavaScript has three operators to combine Boolean values:
// &&       means and
// ||       means or
// !        means not

// The expression x && y is true if both x and y are true, and x || y is true if at least one of x and y are. 
// The expression !x is true if x is false.

// The && and || operators are evaluated lazily. If the left operand decides the result (falsish for &&, truish for ||), 
// the right operand is not evaluated. This is often useful—for example:
let ax = [1,2,3,4,5]
let i = 100
if (i < ax.length && ax[i] > 0) // a[i] > 0 is not evaluated if i ≥ a.length
  console.log("OK")

// The expression x ?? y yields x if x is not undefined or null, and y otherwise. 
console.log( x ?? y )

//=====================
// The switch Statement
//=====================
// The switch statement compares an expression with many possible values. Here is an example:
let some_expression = true
let description = ''
switch (some_expression) {
  case 0:
    description = 'zero'
    break
  case false:
  case true:
    description = 'boolean'
    break
  case '':
    description = 'empty string' // See the “Caution” note below
  default:
    description = 'something else'
}

// Caution
// If you forget to add a 'break' at the end of an alternative, execution falls through to the next alternative! 
// This happens in the preceding example when value is the empty string. 
// The description is first set to 'empty string', then to 'something else'. This “fall through” behavior is 
// dangerous and a common cause for errors. 

//===================
// while and do Loops
//===================
// The while loop executes a statement (which may be a block statement) while a condition is fulfilled. The general form is:
//            while (condition) statement
let years           = 0
let balance         = 9000000
let goal            = 1000000000
let payment_amount  = 1000000
let interest_rate   = 100
while (balance < goal) {
  balance += payment_amount
  let interest = balance * interest_rate / 100
  balance += interest
  years++
}
console.log(`${years} years.`)

// The while loop will never execute if the condition is false at the outset. 
// If you want to make sure a block is executed at least once, you need to move the test to the bottom, 
// using the do/while loop. Its syntax looks like this:
//            do statement while (condition)

// This loop executes the statement (which is typically a block) and then tests the condition. 
// If the condition is fulfilled, the statement and the test are repeated.
let ii = 0
let ss = "TEST"
do {
  ii++
} while (ii < ss.length && ss[i] != ' ')
console.log( ii )

//==========
// for Loops
//==========
// The for loop is a general construct for iterating over elements. 
// The following three sections discuss the variants that JavaScript offers.

// The Classic for Loop
// It works with a counter or similar variable that is updated after every iteration. The following loop logs the numbers from 1 to 10:
for (let i = 1; i <= 10; i++)
  console.log(i)

// The first slot of the for statement holds the counter initialization. 
// The second slot gives the condition that will be tested before each new pass through the loop. 
// The third slot specifies how to update the counter after each loop iteration.

for (let i = ss.length - 1; i >= 0; i--)
  console.log(ss[i])

// The 'for of' Loop
// The 'for of' loop iterates over the elements of an iterable object, most commonly an array or string. 
let arr = [, 2, , 4]
arr[9] = 100
for (const element of arr)
  console.log(element) // Prints undefined, 2, undefined, 4, undefined (5 times), 100

  // The 'for in' Loop
  // You cannot use the 'for of' loop to iterate over the property values of an arbitrary object, 
  // and you probably would not want to do that — the property values are usually meaningless without the keys. 
  // Instead, visit the keys with the 'for in' loop:
let obj = { name: 'Harry Smith', age: 22 }
for (const key in obj)
  console.log(`${key}: ${obj[key]}`)

// The 'for in' loop traverses the keys of the given object.
// You can use a 'for in' loop to iterate over the property names of an array.
let some_numbers = [1, 2, , 4]
some_numbers[99] = 100
for (const i in some_numbers)
  console.log(`${i}: ${some_numbers[i]}`)

//========================
// Breaking and Continuing
//========================
// Sometimes, you want to exit a loop as soon as you reach a goal. 
// Suppose you look for the position of the first negative element in an array.
// Upon seeing a negative element, you just want to exit the loop, so that 'ind' 
// stays at the position of the element. That is what the break statement accomplishes.
let arr = [1,2,3,4,-5,6,7]
let ind = 0
while (ind < arr.length) {
  if (arr[i] < 0) break
  ind++
}

// JavaScript offers a labeled break statement that lets you break out of multiple nested loops.
// Suppose you want to find the location of the first negative element in a two-dimensional array. 
// When you have found it, you need to break out of two loops. 
// Add a label (that is, an identifier followed by a colon) before the outer loop. 
// A labeled break jumps after the labeled loop:
i = 0
let j = 0
outer:
while (i < arr.length) {
  while (j < arr[i].length) {
    if (arr[i][j] < 0) break outer
    j++
  }
  i++
  j = 0
}

// Finally, there is a 'continue' statement that, like the 'break' statement, breaks the regular flow of control. 
// The 'continue' statement transfers control to the end of the innermost enclosing loop. 
// Here is an example — averaging the positive elements of an array:
let count = 0
let sum = 0
for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= 0) continue
  count++
  sum += arr[i]
}
let avg = count === 0 ? 0 : sum / count

//====================
// Catching Exceptions
//====================
// Some methods return an error value when they are invoked with invalid arguments. 
// For example, parseFloat('') returns a NaN value. NaN stands for Not-a-Number.

// However, it is not always a good idea to return an error value. 
// There may be no obvious way of distinguishing valid and invalid values. 
// The parseFloat method is a good example. The call parseFloat('NaN') returns NaN, 
// just like parseFloat('Infinity') returns the Infinity value. When parseFloat returns NaN, 
// you cannot tell whether it parsed a valid 'NaN' string or an invalid argument.

// In JavaScript, a method can take an alternative exit path if it is unable to complete its task in the normal way. 
// Instead of returning a value, a method can throw an exception. In that case, execution does not resume at the code 
// that called the method. Instead, a catch clause is executed. 
// If an exception is not caught anywhere, the program terminates.

// To catch an exception, use a 'try' statement. The simplest form of this statement is as follows:
/*
try {
  code
  more code
  more code
} catch {
  handler
}
*/

// If any code inside the try block throws an exception, then the program skips the remainder of the code in the try block and 
// executes the handler code inside the catch clause.

// For example, suppose you receive a JSON string and parse it. 
// The call to JSON.parse throws an exception if the argument is not valid JSON. 
// Handle that situation in the catch clause:
/*
let input = . . . // Read input from somewhere
try {
  let data = JSON.parse(input)
  // If execution continues here, input is valid
  // Process data
  . . .
} catch {
  // Deal with the fact that the input is invalid
  . . .
}
*/

// In the handler, you can log that information, or take some evasive action to deal with the fact that you were handed a bad JSON string.

// Now, complete the EXERCISES by fixing the errors!!!