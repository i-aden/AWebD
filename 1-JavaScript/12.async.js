// ASYNC FUNCTIONS
// Async functions are also referred to by the operative keyword pair “async/await”. 
// The simplest example of this begins with a simple promise, which resolves with a value after a timeout:
let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3))

// This promise will resolve with a value of 3 after 1000ms. 
// For other parts of the program to access this value once it is ready, it will need to exist inside a resolved handler:
p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
p.then((x) => console.log(x)); // 3

// This is fairly inconvenient, as the rest of the program now needs to be shoehorned into the promise handler.

//======================
// Async Function Basics
//======================
// 'async/await' is intended to directly address the issue of organizing code which makes use of asynchronous constructs.

//==================
// The async keyword
//==================
// An async function can be declared by prepending the 'async' keyword. 
// This keyword can be used on function declarations, function expressions, arrow functions, and methods:
              // async function foo() {}
              // let bar = async function() {}
              // let baz = async () => {}

// Using the async keyword will create a function that exhibits some asynchronous characteristics 
// but overall is still synchronously evaluated. 
// In all other respects such as arguments and closures, it still exhibits all the normal behavior of a JavaScript function. 
// Consider this simple demonstration here, which shows the foo() function is still evaluated before proceeding to subsequent
// instructions:
async function fooo() {
 console.log(100)
}

fooo()
console.log(200)

// In an async function, whatever value is returned with the return keyword (or undefined if there is no return) 
// will be converted into a promise object with Promise.resolve(). 
// An async function will always return a promise object. 
// Outside the function, the evaluated function will be this promise object:
async function foo() {
  console.log(1)
  return 3
}

// Attach a resolved handler to the returned promise
foo().then(console.log)
console.log(2)

// Examples
// Return a primitive
async function foo() {
  return 'foo'
}
foo().then(console.log);
// foo

// Return a non-thenable object
async function bar() {
  return ['bar']
}
bar().then(console.log);
// ['bar']

// Return a thenable non-promise object
async function baz() {
const thenable = {
  then(callback) { callback('baz'); }
};
return thenable;
}
baz().then(console.log);
// baz

// Return a promise
async function qux() {
return Promise.resolve('qux');
}
qux().then(console.log);
 // qux

// As with promise handler functions, throwing an error value will instead return a rejected promise:
async function foo3() {
  console.log(111);
  throw 333;
}

// Attach a rejected handler to the returned promise
foo3().catch(console.log);
console.log(222);

// However, promise rejection errors will not be captured by the async function:
async function foo4() {
 console.log(1);
//  Promise.reject(30000000000000); UNCOMMENT but comment out afterwards!
}

// Attach a rejected handler to the returned promise
foo4().catch(console.log);
console.log(200000000000);

//==================
// The await keyword
//==================
// As an async function indicates to code invoking it that there is no expectation of timely completion, 
// the logical extension of this behavior is the ability to pause and resume execution. 
// This exact feature is possible using the await keyword, 
// which is used to pause execution while waiting for a promise to resolve. 
// Consider the example below:
p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
p.then((x) => console.log(x)); // 3

// This can be rewritten using async/await as follows:
async function foo5() {
  let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 33333333333));
  console.log(await p)
}
 
foo5()

// The await keyword will pause execution of the async function, 
// releasing the JavaScript runtime's thread of execution. 
// The await keyword will attempt to “unwrap” the object's value, 
// pass the value through to the expression, 
// and asynchronously resume execution of the async function.

// The await keyword is used in the same way as a JavaScript unary operator. 
// It can be used standalone or inside an expression, as shown in the following examples:
// Asynchronously print "foo"
async function foo6() {
  console.log(await Promise.resolve('foo'));
}
foo6();
// foo
 
// Asynchronously print "bar"
async function bar() {
  return await Promise.resolve('bar');
}
bar().then(console.log);
// bar
 
// Asynchronously print "baz" after 1000ms
async function baz() {
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  console.log('baz');
}
baz();
// baz <after 1000ms>

// Awaiting a synchronous operation that throws an error will instead return a rejected promise:
async function foo6() {
  console.log(1);
  // await (() => { throw 3; })();    // UNCOMMENT to try but comment out afterwards!
}

// Attach a rejected handler to the returned promise
foo6().catch(console.log);
console.log(2);

// A standalone Promise.reject() will not be captured by an async function and will throw as an unhandled error. 
// However, using await on a promise that rejects will unwrap the error value:
async function foo7() {
  console.log(1);
  await Promise.reject("Promise rejection!!!");
  console.log(4); // Never prints
 }
 
 // Attach a rejected handler to the returned promise
 foo7().catch(console.log);
 console.log(2);

 //=======================
//  Restrictions on await
//=======================
// The await keyword must be used inside an async function.
// It cannot be used in a top-level context such as a script tag or module
// It can also only appear directly inside an async function definition; attempting to use await inside a synchronous 
// function will throw a SyntaxError.

// The key to fully understanding the await keyword is that it does not just wait for a value to become available. 
// When the await keyword is encountered, the JavaScript runtime can track exactly where the execution was paused. 
// When the value to the right of await is ready, the JavaScript runtime will push a task on the message queue 
// that will asynchronously resume execution of that function.

// Therefore, even when await is paired with an immediately available value, the rest of the function will still be 
// asynchronously evaluated. This is demonstrated in the following example:

async function foo8() {
 console.log(2222);
 await null;
 console.log(444);
}

console.log(1);
foo8();
console.log(3);

// The order of the console readout is best explained in terms of how the runtime handles this example:
// 1. Print 1.
// 2. Invoke async function foo8.
// 3. (inside foo8) Print 2.
// 4. (inside foo8) await keyword pauses execution and adds task on message queue for immediately available value of null.
// 5. foo8 exits.
// 6. Print 3.
// 7. Synchronous thread of execution finishes.
// 8. JavaScript runtime dequeues task off message queue to resume execution.
// 9. (inside foo8) Execution resumes; await is provided with the value null (which, here, goes unused).
// 10. (inside foo8) Print 4.
// 11 foo8 returns.
 

// Using await with a promise makes this scenario more complicated. 
// In this case, there will, in fact, be two separate message queue tasks that are evaluated asynchronously to complete 
// execution of the async function. 
// The following example, which might seem completely counterintuitive, demonstrates the order of execution:
async function foo9() {
  console.log(2);
  console.log(await Promise.resolve(8));
  console.log(9);
}
 
 async function bar9() {
  console.log(4);
  console.log(await 6);
  console.log(7);
}
 
console.log(1);
foo9();
console.log(3);
bar9();
console.log(5);

// The runtime will execute this example as follows:

// 1. Print 1.
// 2. Invoke async function foo9.
// 3. (inside foo9) Print 2.
// 4. (inside foo9) await keyword pauses execution and schedules task to be added to message queue when the promise settles.
// 5. Promise is immediately resolved; task to provide resolved value to await is added to message queue.
// 6. foo9 exits.
// 7. Print 3.
// 8. Invoke async function bar.
// 9. (inside bar) Print 4.
// 10. (inside bar) await keyword pauses execution and adds task on message queue for immediately available value of 6.
// 11. bar exits.
// 12. Print 5.
// 13. Top-level thread of execution finishes.
// 14. JavaScript runtime dequeues resolved await promise handler and provides it with the resolved value of 8.
// 15. JavaScript runtime enqueues task to resume execution of foo9 onto message queue.
// 16. JavaScript runtime dequeues task to resume execution of bar with value 6 off message queue.
// 17. (inside bar) Execution resumes, await is provided with the value 6.
// 18. (inside bar) Print 6.
// 19. (inside bar) Print 7.
// 20. bar returns.
// 21. Asynchronous task completes, JavaScript dequeues task to resume execution of foo9 with value 8.
// 22. (inside foo9) Print 8.
// 23. (inside foo9) Print 9.
// 24. foo9 returns.