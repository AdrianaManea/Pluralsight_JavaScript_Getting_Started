- JS flows from top to bottom
- But sometimes we want to include extra codeor exclude extra code or even loop over the same code continuosly
- This all referes to the flow of our code

## if...else Statements

- Allows us to set up certain conditions which will allow certain code to execute
- If a condition is met it will execute some code, else, will execute other code

- Very often in JS we need to conditionally execute some code.
- If a condition is true we want to execute a code block, but if the condition is false we don't want to execute it

**Example 1**

- _if (5 === 5) { console.log('Yes')};_
- Use the if key in an if statement. A statement is simply giving a command to JS.
- In this case we check if 5 is equal to 5
- === -> meaning we're comparing
- So if 5 eguals to 5 we execute a code block
- A **code block** is code that exists between opening and closing parentheses

## Truthy and Falsy Expressions

- When we work with conditionals they usually evaluate to true or false
- But there are certain values of certain variables that take on a true nature or false nature
- And that's where we get the terms truthy or falsy

- Between the paranthesses, after if, in an if statement, there needs to be an expressin that evaluates to either true or false.
- In JS we describe the quality of this as either **falsy** or **truthy**
  **| -----------------Falsy | Trythy----------------|**

  - | ------------------false| Everything NOT falsy--|
  - | ----------------------0| true------------------|
  - | "" or '' (empty string)| Any nr besides 0------|
  - | -------------------null| "0"-------------------|
  - | --------------undefined| ----------------------|
  - | --------------------Nan| ----------------------|

- As a developer the easiest way to remember what's true is simply to remember what's false and it's everything else. So everything not falsy it's truthy

**Example**

- _if(1.1 + 1.3 !== 2.4){ showMessage('true');}_
- Which is actually true
- **Remember** that JS uses innaccurate floating point numbers. this is a case where JS and floating point arithmatic really lets us down. This could through off our calculations especially if we're using greater-than or less-than. The way to fix this is to always round off your numbers.

  - We can put it in parentheses and treat it as an object. And add **.toFixed(2)** which will create a fixed number with a specification of two decimal places because we entered the number 2.
  - But the problem with **.toFixed(2)** is that it return a string. We need to convert all of this from a string to a number. And the easiest way to do this is by **adding a plus sign before the parentheses**.
  - You can think of the plus sign as similar as the negative sign. Negative will make the number negative, but the + sign leaves it as it is. But it does **have the benefit of converting a string to a number**.

  - _if(+(1.1 + 1.3).toFixed(2) !== 2.4){ showMessage('true');}_
  - Now it does not show true which is correct because we check for not equal to !==

**Key take away**

- Is that when working with floating point numbers, you always need to convert the floating point number to a fixed amount of decimal places if you're going to compare it to a literal such as 2.4. If you don't do this your calcualtions could be off.
- And also remember that the plus sign is a simple way to convert a string returned by toFixed() back into a number

- Another thing about **code blocks** is we've only been working with one line of code. But we can put as many lines of code as we'd like, between the opening and closing parentheses.
  - _if(+(1.1 + 1.3).toFixed(2) !== 2.4){ let message = 'hello'; showMessage(message);}_
- We can also put if statements in other if statements; that's very common.

## Comparing === to ==

- == - JS will attempt to convert types
- When you compare numbers or variables, you want to make sure you're comparing the same type, and that's why we use ===
- If the types are different it will evaluate the false

## The Ternary Operator

- It's called ternary because it works with 3 different values and it's a shortcut for working with if..else statements
- This deals with the condition and two different statement that could execute based upon the condition.
- **(condition) ? true--statement : false-statement**
-

## Block Scope

- When we're working with blocks of code we're allowed to declare a variable within that block. And when that block completes, the variable disappear.
- When we started working with if statements, we started working with blocks of code. A block of code exists between the open and closing parentheses.
- And we can actually declare variables within a block. And if we declare that variable using let or const, that variable will only be available in that block.
- And this is very important to understand because variables might seem to disappear otherwise.

**Example**

- _if (true) {_
- _let value = 'yes';_
- _showMessage(value);_
- _}_
- _console.log(value);_

- And it shows an error. Uncaught ReferenceError: value is not defined at ..
- We declared value in a code block, but we can not access it outside of that code block, and that's a good thing
- This way we can **encapsulate some code and not have it leak outside the block.**
- With **var** this behaves very differently

## Looping through code: for, while, do..while

**for() Loop**

- We've seen several ways to conditionally execute code that will execute the code or skip it all together
- But sometimes we need to loop over code
- We need to execute same code over and over and over
- One way to do this is with a for statement
- _for (let i=0; i < 3; i++){ console.log(i); }_

  - for keyword
  - let i=0; declaring a variable i and set it to 0
    - this statement is the first thing that executes in a loop
  - i < 3;
    - next is a condition
    - we're testing to see if i less than 3
    - and if this condition is true, we'll execute this loop
    - the body of this loop being between the opening and closing parentheses{} - console.log(i); in this case
  - i++;

    - is a statement that will execute after the loop completes
    - the ++ operator is called the increment operator and it adds 1 to i

  - So when this code executes, i starts out at 0, and 0 is less that 3, so we'll log out i which is 0
  - The loop has ended, so this statement executes, i++. Now i is 1 and 1 is less than 3, so we log out 1
  - Then we'll incriminate i again so that i is 2, and 2 is less than 3, so we'll log out i, which is 2
  - We'll increment i because we're at the end of the loop again and now i is equal to 3, and 3 is not less than 3 so out loop is done
  - Our code will continue executing beliw the body, but this for loop is complete once this condition returns false

  - So the result of this loop are the values 0, 1, and 2 being logged out.
  - // 0 1 2
  - The loop executes 3 times
  - i-- creates and infinite loop, undesirable

**while() Loop**

- _let count = 1;_
- _while (count < 5) { console.log(count); count++;}_

- We declare a new variable count and set it to 1
- while loop

  - while keyword
  - and we specify a condition, just like we do with a for loop or an if statement
  - while count is less than 5 we execute the code block between {}. Meaning we log out count and then increment count.
  - Increment count it vital. We don't want to get into another situation where we have an endless loop.

- So count starts of at 1 and we log out 1, 2, 3 and 4
- But by the time count gets incrementes to 5, 5 is not less than 5. So the loop completes and then code execution continues after the body of the while loop.
- // 1 2 3 4

**do..while() Loop**
You use a do..while() Loop when you're quaranteed that the body of the code will run at least once.

- _let count = 1;_
- _do {_
- _console.log(count);_
- _count++;_
- _} while (count < 5);_
- // 1 2 3 4
  - we create a new varialbe count and we set it to 1
  - we use the keyword do, followed directlyby the code body
  - add the keyword while and a condition
  - this code block is quaranteed to execute at least one time, so it'll print out 1 increment count, and then while count is < thasn 5 it will continue to execute the code block
  - this code will execute 4 times

## Block Scope

- Variables declared with let or const are blocked scoped
- The variables only exist in that block, and once the block completes, they disappear
- This is one reason we declare our variables with let and const instead of var

## Progrma Flow

All of these things we looked at in this module refer to program flow, whether we include or exclude blocks of code or whether we loop over code
