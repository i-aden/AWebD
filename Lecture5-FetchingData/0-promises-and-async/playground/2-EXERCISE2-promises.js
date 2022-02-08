// Each promise represents one asynchronous operation, and you can chain them to guarantee a particular 
// order of execution. Let s add a getOrders() function that can find the orders 
// for a provided customer, and chain getOrders() with getCustomers().

// You can chain multiple function calls using then() and have just one error-handling script for all 
// chained invocations. If an error occurs, it will be propagated through the entire chain of thens until 
// it finds an error handler. No 'thens' will be invoked after the error.

// Take a look at the file: 0-promises-example.js if you are struggling.

// FIX the errors.

function getCustomers() {
  return new Promise(function (resolve, reject) {
    console.log("Getting customers"); // Emulate an async server call here
    setTimeout(function () {
      const success = true;
      if (success) {
        resolve("John Smith");
      } else {
        reject("Can't get customers");
      }
    }, 1000);
  });
}

function getOrders(customer) {
  return new ???(function (resolve, reject) {  // This is a promise.
    // Emulate an async server call here
    setTimeout(function () {
      let success = true;
      if (success) {
        ???(`Found the order 123 for ${customer}`);
      } else {
        ???("Can't get orders");
      }
    }, 1000);
  });
}

// We want to chain the promises together
getCustomers()
  .???((cust) => {
    console.log(cust);
    return cust;
  })
  .???((cust) => getOrders(cust))
  .???((order) => console.log(order))
  .???((err) => console.error(err));

console.log("Chained getCustomers and getOrders. Waiting for results");
