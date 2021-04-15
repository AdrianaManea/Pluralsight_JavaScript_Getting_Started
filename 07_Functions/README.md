- A **function** is a block of code that we can give a name to and call it over and over.
- A function is a block of code that we give a name to. You can use that name or you can use a variable that points to the function to execute that block of code.
- This is a very important part of JS, and most of the code that you write will be part of a function
- Most of the code that you write in JS will exist within a function
- If you're not writing code inside a function, then you're writing it inside the global scope, which is pretty limited
- Most of the code that you write, you'd want that to be reusable withing functions

## Function Basics

- how to declare them
- how to call a function
- basic syntax to define them

- In between {} - is refered to as the body of the function
- In the body of the function we can have any code. If statements, loops; we can call other functions ..

- _function showMessage() { console.log('in a function'); }_
- This is called **Function Declaration or Function Statement**
- Once we have a function defined like this, we call it/execute it with showMessage();
- We can call it as many times as we want
- That's the main purpose of functions
- If we have code that we want to execute multiple times we generally put it in a function

## Function Expressions

- Common to take a function and store it in a variable
- So a function doesn't necessarily need a name, but we at least need a variable pointing to the function

- _let fn = function loggingFunction() { console.log('A message');}_
- _fn();_ // calls the variable
- It is a best practice to give this function a name. Not required and often in code you don't see it but if you give this function a name, debugging could be easier in the future
- Just remember that we **Can't use this function name - in our ex loggingFunction()**

## Passing Information to Functions

- Pass information into a function
- In this way the code block of the function can work with our data
- Very useful to be able to pass information into a function. That way the function could work with whatever information data you send it

- **Example 1**
- _function showMessage(message) { console.log(message); }_
  - function parameter (message)
  - **you can think of this parameter as a variable. Whatever information we pass to this function will be stored in this parameter.**
- _showMessage('First Message')_
- _showMessage('Secondary Message')_

  - This way we can pass any information to showMessage() and it will be logged out to the console

- _function showMessage(message, anotherMessage) { console.log(message, anotherMessage); }_
- _showMessage('First Message', 'Second Message');_

  - **An argument is an actual value that we send to a function - ex: ('First Message', 'Second Message')**

- **Example 2**
- _let myFunction = function loggingFunction(message, firstName) {_
- _console.log(message);_
- _console.log(firstName);_
- _};_
- _myFunction('Hello', 'John');_
- _myFunction('Hello');_ // It logs out Hello and undefined as firstName

  - So if you don't supply value to all of the parameters, they'll be set to undefined
  - Likewise if you didn't pass any arguments to the function _myFunction();_, we'll get undefined twice

- You always want to make sure that you're passing a function the correct values and the correct number of values. If you don't, the parameter values will be set to undefined
- So this is how we send information into a function

## Function Return Values

- How to get values out of the function
- All functions return some value

- This is how we send information out of a function. Best practice:

**Example 1**

- _function getSecretCode(value) {_
- _let code = value \* 2;_
- _return code;_
- _}_
- _let secretCode = getSecretCode(2);_
  - When we call the function we need to make a variable to hold it's answer or to hold what's being returned from it.
- _showMessage(secretCode);_

**Example 2 from [cs learning](https://www.youtube.com/watch?v=FioqUnOGlq8)**

- _let number = 4;_
- _let anotherNumber = 3;_
- _function add(n1, n2) { return n1 + n2 }_
- _function multiply(n1, n2) { return n1 \* n2; }_
- _let sum = add(number, anotherNumber);_
- _let product = multiply(prompt("Enter a number:"), sum);_
- _console.log(product);_

## Function Scope

- The code block of a function is very similar to the code block of an if statement or a for loop in that you can define variables that belong only to that function
- Once the function finished executing, the variable no longer exist
- Some tricky things about Scope to learn about

- Functions have their own scope. That means that the parameters and local variables to that function only exist within that function and sub functions
- Once the function completes execution, any parameters and local variables disappear

**Example 1**

- _function getSecretCode(value) {_
- _let code = value \* 2;_
- _return code;_
- _}_
- _let secretCode = getSecretCode(2);_
- _showMessage(code);_

  - We get a RefereceError: code is not defined
  - So our code _showMessage(code);_ has no idea what happened in that function
  - Once the function completed execution, the variable code _let code = value \* 2;_ no longer existed
  - We call this being out of scope
  - And this is a good thing, this way we can encapsulate code and make sure it doesn't leak out into the surrounding code.

  **Example 2**

- _let key = 42;_
- _function getSecretCode(value) {_
- _let code = value \* key;_
- _return code;_
- _}_
- _let secretCode = getSecretCode(2);_
- _showMessage(secretCode);_
  - So we want to see if key which is declared outside the function is accesible inside the function
  - And it is
  - We get the value 84
  - So functions have access to the entire outer scope as long as there is a variable or something else defined outside the function as we see with key in our case; any newly declared functions can use it
  - But of course this doesn't work the other way
  - When we have a local variable in the function, once this function finishes execution, that local variable no longer exists
  - And you'll very often see nested functions - a function within another function

## Using Functions to Modify Web Pages
