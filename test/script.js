function showMessage(message) {
  document.getElementById('message').textContent = message;
}

// showMessage('Title');

// if (+(1.1 + 1.3).toFixed(2) !== 2.4) {
//   console.log('true');
// }

// Ternary Operator
// let price = 20;

// let message = (price < 10) ? 'yes' : 'no';
// showMessage(price);

// Block Scope
// if (true) {
//   let value = 'yes';
//   showMessage(value);
// }

// console.log(value);


// for Loop
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// while Loop
// let count = 1;
// while (count < 5) {
//   console.log(count);
//   count++;
// }

// let i = 4;
// while (i > 0) {
//   console.log(i);
//   i--;
// }


// do..while() Loop
// let i = -4;
// let i = 4;
// do {
//   console.log(i);
//   i--;
// } while (i > 0);

// 5_Functions basics
// function logMessage() {
//   console.log('Here is a message!');
// }
// logMessage();

// 5_Function Expression
// let myFunction = function loggingFunction() {
//   console.log('Here is a second message!');
// };
// loggingFunction();
// myFunction();


// 5_Passing Information to Functions
// function showMessage(message) {
//   console.log(message);
// }
// showMessage('First Message');
// showMessage('Secondary Message');

// function showMessage(message, anotherMessage) {
//   console.log(message, anotherMessage);
// }
// showMessage('First Message', 'Second Message');

// let myFunction = function loggingFunction(message, firstName) {
//   console.log(message);
//   console.log(firstName);
// };
// myFunction('Hello', 'John');
// myFunction('Hello');


// 5_Function Return Value
// function getSecretCode(value) {
//   let code = value * 2;
//   return code;
// }
// let secretCode = getSecretCode(2);
// showMessage(secretCode);

// Example 2
// let number = 4;
// let anotherNumber = 3;

// function add(n1, n2) {
//   return n1 + n2;
// }

// function multiply(n1, n2) {
//   return n1 * n2;
// }

// let sum = add(number, anotherNumber);
// let product = multiply(prompt("Enter a number:"), sum);
// console.log(product);


// 5_Function Scope
// Example 1
// function getSecretCode(value) {
//   let code = value * 2;
//   return code;
// }
// let secretCode = getSecretCode(2);
// showMessage(code); // We get a RefereceError: code is not defined // we call this being out of scope


// Example 2
// let key = 42;

// function getSecretCode(value) {
//   let code = value * key;
//   return code;
// }
// let secretCode = getSecretCode(2);
// showMessage(secretCode);


// Example 3
let key = 42;

function getSecretCode(value) {
  // function expression
  let keyGenerator = function () {
    let key = 12;
    console.log('in keyGenerator:', key);
    return key;
  };
  let code = value * keyGenerator();
  console.log('in getSecretCode:', key);
  return code;
}
let secretCode = getSecretCode(2);
showMessage(secretCode);