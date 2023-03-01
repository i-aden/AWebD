// To run this example:
// 1. Go to the terminal (make sure you are in the correct folder, i.e., the folder that contains this 
//    file!!!).
// 2. Type:
//        node <name_of_file>
//      Example:
//        node 0-promises-example.js
// 3. Hit the ENTER key.

let promise = new Promise(function(resolve, reject) {
  const x = 3.14159265359;
  const y = 3.14159265359;
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(() => {
    console.log("Success, PI values are equal!");
  })
  .catch(() => {
    console.log("Error: PI values are different!");
  });

async function testAsync() {
  return "Async Test";
}

testAsync().then((response) => {
  console.log(response);
});

async function testAsyncAwait() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise is complete!!!"), 5000);
  });

  // Wait until the promise returns us a value
  let result = await promise;

  // Promise is complete.
  console.log(result);
}

testAsyncAwait();
