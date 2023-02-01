// //=====================================
// Synchronous vs. Asynchronous JavaScript
// //=====================================
// Synchronous behavior is analogous to sequential processor instructions in memory. 
// Each instruction is executed strictly in the order in which it appears, and each is also capable of immediately 
// retrieving information that is stored locally within the system. 
// As a result, it is easy to reason about the program state (for example, the value of a variable) at any given point in 
// the code.

// A trivial example of this would be performing a simple arithmetic operation:
let x = 3
x = x + 4
// At each step in this program, it is possible to reason about the state of the program because execution will not 
// proceed until the previous instruction is completed. 
// When the last instruction completes, the computed value of x is immediately available for use.

// Asynchronous behavior is analogous to interrupts, where an entity external to the current process is able to trigger 
// code execution. 
// An asynchronous operation is often required because it is infeasible to force the process to wait a long time for 
// an operation to complete (which is the case with a synchronous operation). 
// This long wait might occur because the code is accessing a high-latency resource, such as sending a request to a 
// remote server and awaiting a response.

// A trivial JavaScript example of this would be performing an arithmetic operation inside a timeout:
x = 3
setTimeout(() => x = x + 4, 1000)

// This program eventually performs the same work as the synchronous one—adding two numbers together — 
// but this thread of execution cannot know exactly when the value of x will change because that depends on when 
// the callback is dequeued from the message queue and executed.

function double(value) {
  setTimeout(() => setTimeout(console.log, 0, value * 2), 1000)
}

double(3)   // 6 (printed after roughly 1000ms)
// After 1000ms, the JavaScript runtime will schedule the callback for execution by pushing it onto JavaScript's message 
// queue. 
// The double() function exits immediately after the setTimeout scheduling operation is successful.

//==============================
// Returning Asynchronous Values
//==============================
// Suppose the setTimeout operation returned a useful value. 
// What's the best way to transport the value back to where it is needed? 
// Provide a callback to the asynchronous operation, where the callback contained the code that needs access to the calculated value (provided as a parameter). This looks like the following:

function double2(value, callback) {
 setTimeout(() => callback(value * 2), 1000);
}

double2(3, (x) => console.log(`I was given: ${x}`));
// I was given: 6 (printed after roughly 1000ms)
// Here, the setTimeout invocation is instructed to push a function onto the message queue after 1000ms have elapsed. 
// This function will be dequeued and asynchronously evaluated by the runtime. 
// The callback function and its parameters are still available in the asynchronous execution through a function closure.

//=================
// Handling Failure
//=================
// The possibility of failure needs to be incorporated into this callback model as well.
function double_again(value, success, failure) {
  setTimeout(() => {
   try {
    if (typeof value !== 'number') {
     throw 'Must provide number as first argument'
    }
    success(2 * value)
   } catch (e) {
    failure(e)
   }
  }, 1000)
 }
 
 const successCallback = (x) => console.log(`Success: ${x}`)
 const failureCallback = (e) => console.log(`Failure: ${e}`)
 
 double_again(3, successCallback, failureCallback) // Success: 6 (printed after roughly 1000ms) 
 double_again('b', successCallback, failureCallback)// Failure: Must provide number as first argument (printed after roughly 1000ms)

//=========
// PROMISES
//=========
// A “promise” is a surrogate entity that acts as a stand-in for a result that does not yet exist. 
// Promise is a supported reference type and can be instantiated with the 'new' operator. 
// Doing so requires passing an executor function parameter, which in the example below is an empty function object:
let p = new Promise(() => {})
setTimeout(console.log, 0, p) // Promise <pending>
// If an executor function is not provided, a SyntaxError will be thrown.

//==========================
// The Promise State Machine
//==========================
// A 'promise' is a stateful object that can exist in one of three states:
// 1. Pending
// 2. Fulfilled (sometimes also referred to as resolved)
// 3. Rejected
// A pending state is the initial state of a promise. 
// From a pending state, a promise can become settled by transitioning to a fulfilled state to indicate success, 
// or a rejected state to indicate failure. 
// This transition to a settled state is irreversible; once a transition to either fulfilled or rejected occurs, 
// the state of the promise can never change. Furthermore, it is not guaranteed that a promise will ever leave the 
// pending state. 
// Therefore, well-structured code should behave properly if the promise successfully resolves, 
// if the promise rejects, or if it never exits the pending state.

//============================================
// Controlling Promise State with the Executor
//============================================
// As the state of a promise is private, it can only be manipulated internally. 
// This internal manipulation is performed inside the promise's executor function. 
// The executor function has two primary duties: 
//   initializing the asynchronous behavior of the promise, and 
//   controlling any eventual state transition. 
// Control of the state transition is accomplished by invoking one of its two function parameters, 
// typically named resolve and reject. 
// Invoking resolve will change the state to fulfilled; 
// invoking reject will change the state to rejected. 
// Invoking rejected()will also throw an error.
let p1 = new Promise((resolve, reject) => resolve());
setTimeout(console.log, 0, p1); // Promise <resolved>

// UNCOMMENT the following to lines to try but re-comment afterwards!
// let p2 = new Promise((resolve, reject) => reject());
// setTimeout(console.log, 0, p2); // Promise <rejected> // Uncaught error (in promise) 

// In the preceding example, there is not really any asynchronous behavior occurring because the state of each promise 
// is already changed by the time the executor function exits. 
// Importantly, the executor function will execute synchronously, as it acts as the initializer for the promise. 
// This order of execution is demonstrated below:

new Promise(() => setTimeout(console.log, 0, 'executor')) // executor
setTimeout(console.log, 0, 'promise initialized');        // promise initialized

// You can delay the state transition by adding a setTimeout:
let p3 = new Promise((resolve, reject) => setTimeout(resolve, 1000));

// When this console.log executes, the timeout callback has not yet executed:
setTimeout(console.log, 0, p3); // Promise <pending>

// Once either resolve or reject is invoked, the state transition cannot be undone. 
// Attempts to further mutate the state will silently be ignored. This is demonstrated here:
let p4 = new Promise((resolve, reject) => {
  resolve()
  reject() // No effect
 })
 
 setTimeout(console.log, 0, p4)

//  You can avoid promises getting stuck in a pending state by adding timed exit behavior. 
// For example, you can set a timeout to reject the promise after 10 seconds:
      // let p5 = new Promise((resolve, reject) => {
      //   setTimeout(reject, 10000) // After 10 seconds, invoke reject()  // (After 10 seconds) Uncaught error
      
      //   // Do executor things
      // });
      
      // setTimeout(console.log, 0, p)   // Promise <pending>
      // setTimeout(console.log, 11000, p) // Check state after 11 seconds // (After 11 seconds) Promise <rejected>
 
//=======================================
// Promise Casting with Promise.resolve()
//=======================================
// A promise does not necessarily need to begin in a pending state and utilize an executor function to reach a settled state.
// It is possible to instantiate a promise in the "resolved" state by invoking the Promise.resolve() static method. 
// The following two promise instantiations are effectively equivalent:
let p6 = new Promise((resolve, reject) => resolve())
let p7 = Promise.resolve()

// The value of this resolved promise will become the first argument passed to Promise.resolve(). 
// This effectively allows you to "cast" any value into a promise:
setTimeout(console.log, 0, Promise.resolve()) // Promise <resolved>: undefined
setTimeout(console.log, 0, Promise.resolve(3)) // Promise <resolved>: 3

// Additional arguments are ignored
setTimeout(console.log, 0, Promise.resolve(4, 5, 6)) // Promise <resolved>: 4

//========================================
// Promise Rejection with Promise.reject()
//========================================
// Similar in concept to Promise.resolve(), Promise.reject() instantiates a rejected promise and throws an asynchronous 
// error (which will not be caught by try/catch and can only be caught by a rejection handler). 
// The following two promise instantiations are effectively equivalent:
      // let p8 = new Promise((resolve, reject) => reject())
      // let p9 = Promise.reject()

// The ‘reason' field of this resolved promise will be the first argument passed to Promise.reject(). 
// This will also be the error passed to the reject handler:
let p10 = Promise.reject(3)
setTimeout(console.log, 0, p10); // Promise <rejected>: 3

p10.then(null, (e) => setTimeout(console.log, 0, e)) // 3


//=========================
// Promise.prototype.then()
//=========================
// The method Promise.prototype.then() is the primary method that is used to attach handlers to a promise instance. 
// The then() method accepts up to two arguments: an optional onResolved handler function, and an optional onRejected handler
// function. 
// Each will execute only when the promise upon which they are defined reaches its respective "fulfilled" or "rejected" state.
function onResolved(id) {
  setTimeout(console.log, 0, id, 'resolved');
}
function onRejected(id) {
  setTimeout(console.log, 0, id, 'rejected');
}

let p11 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
let p12 = new Promise((resolve, reject) => setTimeout(reject, 3000));

p11.then(() => onResolved('p11'), 
        () => onRejected('p11'));
p12.then(() => onResolved('p12'), 
        () => onRejected('p12'));

// The Promise.prototype.then() method returns a new promise instance:
p1 = new Promise(() => {});
p2 = p1.then();
setTimeout(console.log, 0, p1);        // Promise <pending>
setTimeout(console.log, 0, p2);        // Promise <pending>
setTimeout(console.log, 0, p1 === p2); // false

//==========================
// Promise.prototype.catch()
//==========================
// The Promise.prototype.catch() method can be used to attach only a reject handler to a promise. 
// It only takes a single argument, the onRejected handler function.
p = Promise.reject();
onRejected = function(e) {
 setTimeout(console.log, 0, 'rejected');
};

// These two reject handlers behave identically:
p.then(null, onRejected); // rejected
p.catch(onRejected);      // rejected 

// The Promise.prototype.catch() method returns a new promise instance:
p1 = new Promise(() => {});
p2 = p1.catch();
setTimeout(console.log, 0, p1);        // Promise <pending>
setTimeout(console.log, 0, p2);        // Promise <pending>
setTimeout(console.log, 0, p1 === p2); // false

//============================
// Promise.prototype.finally()
//============================
// The Promise.protoype.finally() method can be used to attach an onFinally handler, 
// which executes when the promise reaches either a resolved or a rejected state. 
// This is useful for avoiding code duplication between onResolved and onRejected handlers. 
// Importantly, the handler does not have any way of determining if the promise was resolved or rejected, 
// so this method is designed to be used for things like cleanup.
p1 = Promise.resolve();
// p2 = Promise.reject();
let onFinally = function() {
 setTimeout(console.log, 0, 'Finally!')
}

p1.finally(onFinally); // Finally
p2.finally(onFinally); // Finally

// The Promise.prototype.finally() method returns a new promise instance:
p1 = new Promise(() => {});
p2 = p1.finally();
setTimeout(console.log, 0, p1);        // Promise <pending>
setTimeout(console.log, 0, p2);        // Promise <pending>
setTimeout(console.log, 0, p1 === p2); // false


//===============
// Error Handling
//===============
// try/catch can be used to catch an error before it rejects the promise.
p = new Promise((resolve, reject) => {
  try {
    throw Error('foo');
  } catch(e) {}

  resolve('bar');
});

setTimeout(console.log, 0, p); // Promise <resolved>: bar


//=================
// Promise Chaining
//=================
// You can combine multiple promises together.
// Each of the promise instance's methods—then(), catch(), and finally() — returns a separate promise instance, 
// which in turn can have another instance method called upon it. 
// Successively invoking methods in such a manner is referred to as “promise chaining.” 
// The following is a trivial example of this:
p = new Promise((resolve, reject) => { 
  console.log('first');
  resolve();
});
p.then(() => console.log('second'))
 .then(() => console.log('third'))
 .then(() => console.log('fourth'));

// This example above is executing chained synchronous tasks.
// To chain asynchronous tasks, this example can be retooled so that each executor returns a promise instance. 
// As each successive promise will await the resolution of its predecessor, 
// such a strategy can be used to serialize asynchronous tasks. 
// For example, this can be used to execute multiple promises in series that resolve after a timeout:
p1 = new Promise((resolve, reject) => {
  console.log('p1 executor');
  setTimeout(resolve, 1000);
});

p1.then(() => new Promise((resolve, reject) => {
  console.log('p2 executor');
  setTimeout(resolve, 1000);
 }))
 .then(() => new Promise((resolve, reject) => {
  console.log('p3 executor');
  setTimeout(resolve, 1000);
 }))
 .then(() => new Promise((resolve, reject) => {
  console.log('p4 executor');
  setTimeout(resolve, 1000);
 }));

// Since then(), catch(), and finally() all return a promise, chaining them together is straightforward. 
// The following example incorporates all three:
p = new Promise((resolve, reject) => {
  console.log('initial promise rejects');
  reject();
});

p.catch(() => console.log('reject handler'))
 .then(() => console.log('resolve handler'))
 .finally(() => console.log('finally handler'));

