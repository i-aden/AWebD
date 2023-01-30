/* EX 1: Create a basic counter that will increase a dynamic variable by a consistent step value, up to an upper limit.

1. Set the starting counter to 0.
2. Create a variable, step, to be used to increase your counter.
3. Add a 'do while' loop, printing the counter to the console and incrementing it by the step amount each loop.
4. Continue to loop until the counter is equal to 100 or more than 100.
*/


// FIX
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let name ? names){
  console.log(name);
}

/* EX 2: Construct an array as it loops through the incrementing values of x. 

1. Create an empty array
2. Run a loop 10 times, adding a new incrementing value to the array
3. Log the array into the console
4. Use the for loop to iterate through the array (adjust the number of iterations to however many values are in 
    your array) and output into the console
5. Use the 'for of' loop to output the value into the console from the array
*/


// FIX: 
let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black",
};
for (let prop ?? car){
  console.log(car[prop]);

  // What does just using 'prop' output?
  // console.log(prop);   TRY THIS!!!
}


/* EX 3: Experiment with looping over objects and internal arrays

1. Create a simple object with three items in it.
2. Using the 'for in' loop, get the properties' names and values from the object and output them into the console.
3. Create an array containing the same three items. 
    Using either the for loop or the for in loop, output the values from the array into the console.
*/



/* EX 4: Create a string with all the digits as it loops through them. We can also set a value to skip by adding 
    a condition that will use 'continue', skipping the matching condition. 
    A second option is to do the same exercise and use the 'break' keyword.

1. Set up a string variable to use as output.
2. Select a number to skip, and set that number as a variable.
3. Create a for loop that counts to 10.
4. Add a condition to check if the value of the looped variable is equal to the number that should be skipped.
5. If the number is to be skipped in the condition, continue to the next number.
6. As you iterate through the values, append the new count value to the end of the main output variable.
7. Output the main variable after the loop completes.
8. Reuse the code, but change the continue to break and see the difference. It should now stop at the skip value.
*/



/* EX 5: Math multiplication table
Create a math multiplication table using loops. You can do this using your own creativity or by following some of 
the following suggested steps:

1. Set up a blank array to contain the final multiplication table.
2. Set a value variable to specify how many values you want to multiply with one another and show the results for.
3. Create an outer for loop to iterate through each row and a temp array to store the row values. 
  Each row will be an array of cells that will be nested into the final table.
4. Add an inner for loop for the column values, which will push the multiplied row and column values to the temp array.
5. Add the temporary row data that contains the calculated solutions to the main array of the final table. 
    The final result will add a row of values for the calculations.
*/