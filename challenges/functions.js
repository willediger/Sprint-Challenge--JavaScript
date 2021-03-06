// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

const higherOrder = (cb) => {
  return cb();
}

//function to test higherOrder
const higherOrderFn = () => {
  console.log('mic check 1 2, 1 2')
}

//invocation of higherOrder to test it's working
higherOrder(higherOrderFn);

const consume = (val1, val2, cb) => cb(val1, val2);

//function to test consume
const consumeFn = (val1, val2) => val1 + val2;

//invocation of consume to test it's working
console.log(consume(5, 8, consumeFn));

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (val1, val2) => val1 + val2;
const multiply = (val1, val2) => val1 * val2;
const greeting = (firstName, lastName) => `Hello ${firstName} ${lastName}, nice to meet you!`;

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// nestedFunction is a closure inside myFunction(). it has access to block variables set inside the same block level it is. since internal is defined in the same scope as nestedFunction, it has access to it.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();