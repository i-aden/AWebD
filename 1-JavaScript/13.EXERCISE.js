// // FIX:
// function judge(grade_class) {
//   switch (true) {
//       ? grade_class == "1st":
//           console.log("You got a", grade_class, ":Aamazing!");
//           break;
//       case grade_class == "2.1":
//           console.log("You got a", grade_class, ": well done!");
//           break;
//       case grade_class == "2.2":
//           console.log("You got a", grade_class, ": Alright.");
//           ?;
//       case grade_class == "3":
//           console.log("You got a", grade_class, ": Hmmm...");
//           break;
//       def?:
//           console.log("A", grade_class, "! What?!");
//   }
// }
// ? getgrade_class(score, callback) {
//   let grade_class;
//   switch (true) {
//       case score >= 90:
//           grade_class = "1st";
//           break;
//       case score >= 80:
//           console.log(score);
//           grade_class = "2.1";
//           break;
//       case score >= 70:
//           grade_class = "2.2";
//           break;
//       case score >= 60:
//           grade_class = "3rd";
//           break;
//       default:
//           grade_class = "Pass";
//   }
//   callback(grade_class);
// }
// getgrade_class(95, judge);


// EX1: How to use a callback function, creating a way to pass a value from one function to another by invoking a 
// callback function. We will create a greeting callback using a full name in a string.
// 1. Create a function named greet() that takes one argument, fullName. That argument should be an array. 
//     Output the items of the array into the console interpolated into a greeting message string.
// 2. Create a second function that has two arguments: the first one is a string for the user's full name, and 
//     the second is the callback function.
// 3. Split the string into an array using the split() method.
// 4. Send the full-name array to the greet() function created in the first step.
// 5. Invoke the process of the callback function.


//=========
// Promises
//=========
// FIX:
let promise = new Promise(function (resolve, reject) {
  // do something that might take a while
  // let's just set x instead for this example  
  let x = 20;
  if (x > 10) {
      resolve(x); // on success
  } else {
      reject("Too low");  // on error
  }
});
promise.then(
  function (value) {
      console.log("Success:", value);
  },
  function (error) {
      console.log("Error:", error);
  }
);


// FIX:
// This should log:
// success!
// we
// can
// chain
// promises
const promise1 = new Promise((resolve, reject) => {
  resolve("success!");
})
  .then(value => {
      console.log(value);
      return "we";
  })
  .then(value => {
      console.log(value);
      return "can";
  })
  .then(value => {
      console.log(value);
      return "chain";
  })
  .then(value => {
      console.log(value);
      return "promises";
  })
  .then(value => {
      console.log(value);
  })
  .catch(value => {
      console.log(value);
  })


  // FIX:  This should log:   'oops...' because the first Promise was rejected instead of resolved.
  const promise2 = new Promise((resolve, reject) => {
    reject("oops... ");
})
    .then(value => {
        console.log(value);
        return "we";
    })
    .then(value => {
        console.log(value);
        return "can";
    })
    .then(value => {
        console.log(value);
        return "chain";
    })
    .then(value => {
        console.log(value);
        return "promises";
    })
    .then(value => {
        console.log(value);
    })
    .catch(value => {
        console.log(value);
    })


// EX 2: Create a counter that will output the values in sequence using Promises.
// 1. Set up a Promise that resolves with a value of Start Counting.
// 2. Create a function named counter() that has one argument that gets the value and outputs it into the console.
// 3. Set up the next function in the Promise with four then() instances, which should output a value into the counter 
//      function, and return a value which will provide input for the subsequent then() instance. 
//      The returned values should be one, then two, then three. The screen output in the console should be the following:
// 
// Start Counting
// One
// Two
// Three


//================
// async and await
//================
// FIX: 
function saySomething(x) {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve("something" + x);
      }, 2000);
  });
}
async function talk(x) {
  const words = await saySomething(x);
  console.log(words);
}
talk(2);
talk(4);
talk(8);
// This should log:
// something2
// something4
// something8


// EX 3: How to use await to wait on a Promise inside an async function. 
// Using await and async, create a counter with timeout(), and increment a global counter value.
// 1. Create a global value for a counter.
// 2. Create a function that takes one argument. 
//     Return the result of a new Promise, setting a setTimeout() function that will contain the resolve instance.
// 3. Increment the counter within setTimeout(), adding one every second. 
//     Resolve the Promise with the value of the counter and the value of the variable that was in the function argument.
// 4. Create an asynchronous function that outputs into the console the value of the global counter and the value of the 
//     argument of the function.
// 5. Create a variable to capture the returned resolve value from the await function. Output that result into the console.
// 6. Create a loop to iterate 10 times, incrementing the value and invoking the async function, passing the value of 
//     the increment variable as the parameter in the function.
// The results should look like the following:
//
// ready 1 counter:0
// ready 2 counter:0
// ready 3 counter:0
// x value 1 counter:1
// x value 2 counter:2
// x value 3 counter:3


// EX 4: Instead of creating a promise chain, you want to write linear logic that is easier to read and looks more like 
// synchronous code.
// 
// Do not call Promise.then(). Instead, use the await keyword on your promise:
              // console.log('taskPromise is working asynchronously');
              // await taskPromise;
              // console.log('taskPromise has finished');
// The code after await does not run until the awaited promise has been resolved or rejected. 
// The execution of your code pauses, but without blocking the thread, locking up the UI, or preventing other timers and 
// events from triggering.

// There is a catch. The await keyword is only useable inside an async function. 
// That means you may need some rearranging to use await. 

// consider the code below which runs code when an asynchronous task completes (successfully or unsuccessfully). 
// It notifies you about task completion through a Promise object.
const url = 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg';

fetch(url)
.then(response => {
  // The fetch operation has completed
  console.log(`HTTP status: ${response.status}`);
  console.log('All asynchronous steps completed');
})

// With the async and await keywords, you can structure it like this:
// EX 4.1: Rewrite the fetch code above using async await in the following function:
? function getImage() {
  ??????
}

getImage().then(() => {
  console.log('All asynchronous steps completed');
});

// EX 4.2: You can also use traditional exception-catching blocks around awaited operations, instead of the Promise.catch() 
// method. Rewrite the asyn-await version using error handling.
?? function getImage() {
  const url = 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg';

  try {
    ???
  }
  catch(err) {
    ???
  }
  finally {
    ???
  }
}