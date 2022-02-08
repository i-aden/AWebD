// The async and await keywords allow you to treat functions returning promises as if they are synchronous. 
// The next line of code is executed only when the previous one completes, but the waiting for the 
// asynchronous code to complete happens in the background and does not block the execution of other parts 
// of the program:

//         async - A keyword that marks an asynchronous function.
//         await - A keyword that you place right before the invocation of the async function. 
//                 This instructs the JavaScript engine to not proceed to the next line until the 
//                 asynchronous function either returns the result or throws an error. The JavaScript 
//                 engine will internally wrap the expression on the right of the 'await' keyword into 
//                 a promise and the rest of the method into a then() callback.
                
// To illustrate the use of the 'async' and 'await' keywords, we will reuse the getCustomers() and 
// getOrders() functions, which use promises inside to emulate asynchronous processing.

// FIX the errors!!!

function getCustomers() {
  return new Promise(function (resolve, reject) {
    console.log("Getting customers");
    // Emulate an async server call here
    setTimeout(function () {
      const success = true;
      if (success) {
        resolve("John Smith"); // got the customer
      } else {
        reject("Can't get customers");
      }
    }, 1000);
  });
}

function getOrders(customer) {
  return new Promise(function (resolve, reject) {
    // Emulate an async server call here
    setTimeout(function () {
      const success = true; // change it to false

      if (success) {
        resolve(`Found the order 123 for ${customer}`); // got the order
      } else {
        reject(`getOrders() has thrown an error for ${customer}`);
      }
    }, 1000);
  });
}

// We want to chain these function calls, but this time we will not be using the then() calls as we did 
// with promises. We will create a new getCustomersOrders() function that internally invokes 
// getCustomers(), and when that completes, getOrders().
(??? function getCustomersOrders() {  // Make this function async
  ??? {
    const customer = ??? getCustomers(); // We want to 'await' getCustomers()
    console.log(`Got customer ${customer}`);
    const orders = ??? getOrders(customer); // and getOrders
    console.log(orders);
  } 
  catch (err) {
    console.log(err);
  }
})();

console.log(
  "This is the last line in the app. Chained getCustomers()  and getOrders() are still running without blocking the rest of the app."
);
