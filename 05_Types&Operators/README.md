# Types and Operators

## Numbers

## Strings

- single quotes
- double quotes
- backticks

## Converting between Types

- sometimes we have a number and we want to treat it as a string - **variable.toString()**
- or sometimes we have a string which could be something entered by a user or something downloaded of the internet and we want to convert that into numbers - **Number.parseFloat("123")**
- Nan - When parsing a string we have to make sure there is no letter in it specially at the beginning. As soon as it runs into a character that isn't part of a number it starts parcing and it's going to through an error - **(Number.parseFloat("A123"))**

## Booleans

- true
- false

- let saved = true;
- saved = !saved!

## Null and Undefined

**Example 1**

- let saved;
- showMessage(saved);
- console.log(saved);
- We do get undefined even though nothing shows in the browser. And that is the definition of undefined.
  It means that we have not initialized a varible or some other value.

**Example 2**

- let saved = 10;
- save= null;
- showMessage(saved);
- console.log(saved);

- Now it may be that 'saved' does get initialized for ex. like the value 10 but then later in our code, after we run some processing or some algorithm we might want to wipe out the value that stored in 'saved'.
- **JS will set values to undefined** when they're not initializes.
- **But a programmer will set a value to null** when they want to clear out that value. This is just **Best practice**; So we can differentiate
  between what JS is doing with undefined and what developers are doing with null.

## Objects and Symbols

- An object is a valid data type in JS

- let person = { firstName: "John", lastName: "Doe"};
- showMessage(person.firstName);
- The dot operator takes an object and pulls up one of the properties of the person, in this case firstName.
- Another very useful feature of Objects is that we can have methods where a property like firstName in our case holds a single value.
- A method can actually run it's own block of code.

**Symbols**

- An object can be used as a property in an object such as firstname but it's hidden.
- There are times where you might want to hide information about an object and use symbols for that.
