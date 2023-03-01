// When you press the button on your coffee machine, you do not get a cup of coffee that very second. 
// You get a promise that you will get a cup of coffee sometime later. 

// If you did not forget to provide the water and the ground coffee, the promise will be resolved, and 
// you can enjoy the coffee in a minute or so. 

// If your coffee machine is out of water or coffee, the promise will be rejected. 
// The entire process is asynchronous, and you can do other things while your coffee is being brewed.

// JavaScript promises allow you to avoid nested calls and make the async code more readable. 
// The Promise object represents the eventual completion or failure of an async operation.

// After the Promise object is created, it waits and listens for the result of an asynchronous operation 
// and lets you know if it succeeds or fails so you can proceed with the next steps accordingly.

// The Promise object represents the future result of an operation, and it can be in one of these states:

//          Fulfilled - The operation successfully completed.
//          Rejected  - The operation failed and returned an error.
//          Pending   - The operation is in progress, neither fulfilled nor rejected.

// You can instantiate a Promise object by providing two functions to its constructor: 
// (1) the function to be called if the operation is fulfilled, and 
// (2) the function to be called if the operation is rejected. 

// FIX the errors!

function getCustomers() {
  return new Promise(function (?, ?) {
    console.log("Getting customers"); // Emulate an async server call here
    setTimeout(function () {
      var success = true;
      if (success) {
        ???("John Smith");
      } else {
        ???("Can't get customers");
      }
    }, 1000);
  });
}

let promise = getCustomers()
  .then((cust) => console.log(cust))
  .catch((err) => console.log(err));
console.log("Invoked getCustomers. Waiting for results");
