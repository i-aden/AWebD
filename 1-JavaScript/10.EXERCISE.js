/*
If you have not installed prompt-sync, which allows you to get input from the termminal, you can do so by: 
1. In the terminal install prompt-sync:  npm install prompt-sync
*/
const prompt = require('prompt-sync')();  // Load prompt-sync as prompt. Notice the extra () after require().

// FIX
? sayHello() {
  let you = prompt("What's your name? ");
  console.log("Hello", you + "!");
}

let varContainingFunction = func() {
  let varInFunction = "I'm in a function.";
  console.log("hi there!", varInFunction);
}
varContainingFunction()

// EX 1:
// 1. Create a function that takes two parameters, adds the parameters together, and returns the result.
// 2. Set up two different variables with two different values.
// 3. Use your function on the two variables, and output the result using console.log.
// 4. Create a second call to the function using two more numbers as arguments sent to the function.


// EX2: Create a program that will randomly describe an inputted name.
// 1. Create an array of descriptive words.
// 2. Create a function that contains a prompt asking the user for a name.
// 3. Select a random value from the array using Math.random.
// 4. Output into the console the prompt value and the randomly selected array value.
// 5. Invoke the function.


// EX4: Create a basic calculator that takes two numbers and one string value indicating an operation. 
//      If the operation equals add, the two numbers should be added. 
//      If the operation equals subtract, the two numbers should be subtracted from one another. 
//      If there is no option specified, the value of the option should be add.
// The result of this function needs to be logged. Test your function by invoking it with different operators and 
// no operator specified.
// 1. Set up two variables containing number values.
// 2. Set up a variable to hold an operator, either + or -.
// 3. Create a function that retrieves the two values and the operator string value within its parameters. 
//      Use those values with a condition to check if the operator is + or -, and add or subtract the values accordingly 
//      (remember if not presented with a valid operator, the function should default to addition).
// 4. Within console.log(), call the function using your variables and output the response to the console.
// 5. Update the operator value to be the other operator type — either plus or minus — and call to the function again 
//      with the new updated arguments.


// EX 5: Modify the calculator that you made above to return added values instead of printing them. 
//        Then, call the function 10 or more times in a loop, and store the results in an array. 
//        Once the loop finishes, output the final array into the console.
// 1. Set up an empty array to store the values that will be calculated within the loop.
// 2. Create a loop that runs 10 times, incrementing by 1 each time, creating two values each iteration. 
//      For the first value, multiply the value of the loop count by 5. For the second value, multiply the value of 
//      the loop counter by itself.
// 3. Create a function that returns the value of the two parameters passed into the function when it is called. 
//      Add the values together, returning the result.
// 4. Within the loop, call the calculation function, passing in the two values as arguments into the function and 
//      storing the returned result in a response variable.
// 5. Still within the loop, push the result values into the array as it iterates through the loop.
// 6. After the loop is complete, output the value of the array into the console.
// 7. You should see the values [0, 6, 14, 24, 36, 50, 66, 84, 104, 126] for the array in the console.


// EX 6: Set timeout order
// Use the arrow format to create functions that output the values one and two to the console. 
// Create a third function that outputs the value three to the console, and then invokes the first two functions.

// Create a fourth function that outputs the word four to the console and also use setTimeout() to invoke the first 
// function immediately and then the third function.

// What does your output look like in the console? Try to get the console to output:

// Four
// Three
// One
// Two
// One