// Declaring Functions
// In JavaScript, you declare a function by providing 
// - The name of the function
// - The names of the parameters
// - The body of the function, which computes and returns the function result
function average(x, y) {
  return (x + y) / 2
}

let result = average(6, 7) // result is set to 6.5

// The return statement returns immediately, abandoning the remainder of the function. 
// Consider this example—an indexOf function that computes the index of a value in an array:
function indexOf(arr, value) {
  for (let i in arr) {
    if (arr[i] === value) return i
  }
  return -1
}
// As soon as a match is found, the index is returned and the function terminates.

//=======================
// Higher-Order Functions
//=======================
// JavaScript is a functional programming language. Functions are values that you can store in variables, 
// pass as arguments, or return as function results.
// For example, we can store the average function in a variable:
let f = average
// Then you can call the function:
result = f(6, 7)
// When the expression f(6, 7) is executed, the contents of f is found to be a function. 
// That function is called with arguments 6 and 7.

// Here is an example of passing a function as an argument. If arr is an array, the method call
//          arr.map(someFunction)
// applies the provided function to all elements, and returns an array of the collected results 
// (without modifying the original array). For example,
result = [0, 1, 2, 4].map(Math.sqrt)
// sets result to
// [0, 1, 1.4142135623730951, 2]
// The map method is sometimes called a higher-order function: a function that consumes another function.

//==================
// Function Literals
//==================
// Suppose we want to multiply all array elements by 10. Of course, we can write a function
function multiplyBy10(x) { return x * 10 }
// Now we can call:
result = [0, 1, 2, 4].map(multiplyBy10)
// It seems a waste to declare a new function just to use it once.
// It is better to use a function literal. JavaScript has two syntactical variants. Here is the first one:
result = [0, 1, 2, 4].map(function (x) { return 10 * x })
// You use the same function syntax as before, but now you omit the name. 
// The function literal is a value that denotes the function with the specified action. 
// That value is passed to the map method.

//================
// Arrow Functions
//================
// You saw how to declare function literals with the function keyword. 
// There is a second, more concise form that uses the => operator, usually called “arrow”:
const avrg = (x, y) => (x + y) / 2
// You provide the parameter variables to the left of the arrow and the return value to the right.
// If there is a single parameter, you do not need to enclose it in parentheses:
const multiply_by_10 = x => x * 10
// If the function has no parameters, use an empty set of parentheses:
const dieToss = () => Math.trunc(Math.random() * 6) + 1
// Note that dieToss is a function, not a number. Each time you call dieToss(), you get a random integer between 1 and 6.
// If an arrow function is more complex, place its body inside a block statement. 
// Use the return keyword to return a value out of the block:
const index_of = (arr, value) => {
  for (let i in arr) {
    if (arr[i] === value) return i
  }
  return -1
}

// If an arrow function does nothing but returns an object literal, then you must enclose 
// the object in parentheses:
const stats = (x, y) => ({
  average: (x + y) / 2,
  distance: Math.abs(x - y)
})
// Otherwise, the braces would be parsed as a block.

//============================
// Functional Array Processing
//============================
// Instead of iterating over an array with a 'for of' or 'for in' loop, you can use the 'forEach' method. 
// Pass a function that processes the elements and index values:
let arr = [1,2,3,4,5,6,7,8,9,10,11]
arr.forEach((element, index) => { console.log(`${index}: ${element}`) })

// The function is called for each array element, in increasing index order.
// If you only care about the elements, you can pass a function with one parameter:
arr.forEach(element => { console.log(`${element}`) })

// Another useful array method is 'filter'. It receives a predicate function — a function that returns a Boolean 
// (or Boolish) value. The result is an array of all elements that fulfill the predicate. 
const list = arr.filter(i => i > 3)

//=========
// Closures
//=========
// The 'setTimeout' function takes two arguments: a function to execute later, when a timeout has elapsed, 
// and the duration of the timeout in milliseconds. For example, this call says “Goodbye” in ten seconds:
setTimeout(() => console.log('Goodbye'), 10000)
// Let’s make this more flexible:
const sayLater = (text, when) => {
  let task = () => console.log(text)
  setTimeout(task, when)
}
// Now we can call:
sayLater('Hello', 1000)
sayLater('Goodbye', 10000)

// The fundamental idea of a closure is very simple: A free variable inside a function means exactly what it means outside. 
// However, the consequences are profound. It is very useful to capture variables and have them accessible indefinitely. 

//=======================
// Testing Argument Types
//=======================
// In JavaScript, you do not specify the types of function arguments. Therefore, you can allow callers to supply an argument
// of one type or another, and handle that argument according to its actual type.
// As a somewhat contrived example, the average function may accept either numbers or arrays.
const another_average = (x, y) => {
  let sum = 0
  let n = 0
  if (Array.isArray(x)) {
    for (const value of x) { sum += value; n++ }
  } else {
    sum = x; n = 1
  }
  if (Array.isArray(y)) {
    for (const value of y) { sum += value }
  } else {
    sum += y; n++
  }
  return n === 0 ? 0 : sum / n
}
// Now you can call:
result = another_average(1, 2)
result = another_average([1, 2, 3], 4)
result = another_average(1, [2, 3, 4])
result = another_average([1, 2], [3, 4, 5])

//==================
// Default Arguments
//==================
// You can provide default arguments in the function declaration. 
// After the parameter, put an = and an expression for the default — that is, the value that should be used if no 
// argument was passed.
// Here is another way of making the average function work with one argument:
const avge = (x, y = x) => (x + y) / 2
// If you call avge(3), then y is set to x — that is, 3 — and the correct return value is computed.
// You can provide multiple default values:
const ave_rage = (x = 0, y = x) => (x + y) / 2
// Now ave_rage() returns zero.

//========================================
// Rest Parameters and the Spread Operator
//========================================
// You can call a JavaScript function with any number of arguments. 
// To process them all, declare the last parameter of the function as a “rest” parameter by prefixing it 
// with the ... token:
const average_again = (first = 0, ...following) => {
  let sum = first
  for (const value of following) { sum += value }
  return sum / (1 + following.length)
}
// When the function is called, the 'following' parameter is an array that holds all arguments that have not been used 
// to initialise the preceding parameters. For example, consider the call:
average_again(1, 7, 2, 9)
// Then first is 1 and following is the array [7, 2, 9].

// Many functions and methods accept variable arguments. 
// For example, the Math.max method yields the largest of its arguments, no matter how many:
result = Math.max(3, 1, 4, 1, 5, 9, 2, 6) // Sets result to 9

// What if the values are already in an array?
let numbers = [1, 7, 2, 9]
result = Math.max(numbers) // Yields NaN
// That does not work. The Math.max method receives an array with one element — the array [1, 7, 2, 9].
// Instead, use the “spread” operator — the '...' token placed before an array argument:
result = Math.max(...numbers) // Yields 9
// The spread operator spreads out the elements as if they had been provided separately in the call.

// Even though the spread operator and rest declaration look the same, their actions are the exact opposites of each other.
// First, note that the spread operator is used with an argument, and the rest syntax applies to a variable declaration.
        // Math.max(...numbers) // Spread operator—argument in function call
        // const max = (...values) => { /* body */}  // Rest declaration of parameter variable
// The spread operator turns an array (or, in fact, any iterable) into a sequence of values. 
// The rest declaration causes a sequence of values to be placed into an array.

//====================
// Throwing Exceptions
//====================
// If a function is unable to compute a result, it can throw an exception. 
// Depending on the kind of failure, this can be a better strategy than returning an error value such as NaN or undefined.
// Use a 'throw' statement to throw an exception:
      // throw value
// The exception value can be a value of any type, but it is conventional to throw an error object. 
// The Error function produces such an object with a given string describing the reason.
let elem = 1
let reason = `Element ${elem} not found`
// throw Error(reason)         // Uncomment this to try it out but comment it out afterwards to keep working.

// When the throw statement executes, the function is terminated immediately. 
// No return value is produced, not even undefined. Execution does not continue in the function call but instead in the 
// nearest catch or finally clause explained below.

//====================
// Catching Exceptions
//====================
// To catch an exception, use a try statement. If you want to examine the exception value, add a variable to the 
// catch clause:
      // try {
      //   // Do work
      //   . . .
      // } catch (e) {
      //   // Handle exceptions
      //   . . .
      // }
// The variable in the catch clause (here, e) contains the exception value. 
// An exception value is conventionally an error object. 
// Such an object has two properties: name and message. For example, if you call

// JSON.parse('{ age: 22 }')   // Uncomment this to see the effect but comment it out afterwards to keep working.

// an exception is thrown with the name 'SyntaxError' and message 'Unexpected token a in JSON at position 2'. 
// (The string in this example is invalid JSON because the age key is not enclosed in double quotes.)
// The name of an object produced with the Error function is 'Error'. 
// The JavaScript virtual machine throws errors with names:
// 'SyntaxError', 'TypeError', 'RangeError', 'ReferenceError', 'URIError', or 'InternalError'.

// When the catch clause is entered, the exception is deemed to be handled. 
// Processing resumes normally, executing the statements in the catch clause. 
// The catch clause can exit with a return or break statement, or it can be completed by executing its last statement. 
// In that case, execution moves to the next statement after the catch clause.

//===================
// The finally Clause
//===================
// A 'try' statement can optionally have a 'finally' clause. 
// The code in the 'finally' clause executes whether or not an exception occurred.

// Let us first look at the simplest case: a 'try' statement with a 'finally' clause but no 'catch' clause:

          // try {
          //   // Acquire resources
          //   . . .
          //   // Do work
          //   . . .
          // } finally {
          //   // Relinquish resources
          //   . . .
          // }

// The 'finally' clause is executed in all of the following cases:
//  - If all statements in the 'try' clause completed without throwing an exception
//  - If a return or break statement was executed in the try clause
//  - If an exception occurred in any of the statements of the try clause

// You can also have a try statement with catch and finally clauses:
          // try {
          //   . . .
          // } catch (e) {
          //   . . .
          // } finally {
          //   . . .
          // }
// Now there is an additional pathway. If an exception occurs in the try clause, the catch clause is executed. 
// No matter how the catch clause exits (normally or through a return/break/throw), 
// the finally clause is executed afterwards.
// The purpose of the finally clause is to have a single location for relinquishing resources 
// (such as file handles or database connections) that were acquired in the try clause, 
// whether or not an exception occurred.

// Now, do the exercises!!!