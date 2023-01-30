/* EX 1
1. Create a Boolean value for an ID variable
2. Using a ternary operator, create a message variable that will check whether their ID 
    is valid and either allow a person into a venue or not
3. Output the response to the console
*/


/*
For the next exercise, do this first so you can obtain user input from the console:

1. In the terminal install prompt-sync:  npm install prompt-sync
2. Try out this example code:
*/
const prompt = require('prompt-sync')();  // Load prompt-sync as prompt. Notice the extra () after require().

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);

// All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:
const num = prompt('Enter a number: ');
console.log('Your number + 4 =');
console.log(Number(num) + 4);


// The JavaScript function Math.random() will return a random number in the range of 0 to less than 1, 
//including 0 but not 1. You can then scale it to the desired range by multiplying the result and using 
// Math.floor() to round it down to the nearest whole number.
// For example, to generate a random number between 0 and 9:

// random number between 0 and 1
let randomNumber = Math.random(); 
// multiply by 10 to obtain a number between 0 and 10
randomNumber = randomNumber * 10; 
// removes digits past decimal place to provide a whole number
RandomNumber = Math.floor(randomNumber);  


/* EX 2:  Create a Magic 8-Ball random answer generator:

1. Start by setting a variable that gets a random value assigned to it. 
    The value is assigned by generating a random number 0-5, for 6 possible results. 
    You can increase this number as you add more results.
2. Create a prompt that can get a string value input from a user that you can repeat back in the final output.
3. Create 6 responses using the switch statement, each assigned to a different value from the random number generator.
4. Create a variable to hold the end response, which should be a sentence printed for the user. 
    You can assign different string values for each case, assigning new values depending on the results from the 
    random value.
5. Output the user's original question, plus the randomly selected case response, to the console after 
    the user enters their question.
*/


/*
Ex 3: Rock Paper Scissors game
This is a game between a player and the computer, where both will make a random selection of either 
Rock, Paper, or Scissors.
Rock will beat out Scissors, Paper will beat out Rock, and Scissors will beat out Paper. 
Here are some suggested steps:

1. Create an array that contains the variables Rock, Paper, and Scissors.
2. Set up a variable that generates a random number 0-2 for the player and then do the same for the computer's selection. 
    The number represents the index values in the array of the 3 items.
3. Create a variable to hold a response message to the user. 
    This can show the random results for the player and then also the result for the computer of the matching item from 
    the array.
4. Create a condition to handle the player and computer selections. If both are the same, this results in a tie.
5. Use conditions to apply the game logic and return the correct results. There are several ways to do this with the 
  condition statements, but you could check which player's index value is bigger and assign the victory accordingly, 
  with the exception of Rock beating Scissors.
6. Add a new output message that shows the player selection versus the computer selection and the result of the game.
*/