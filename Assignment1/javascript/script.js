/* -------------    QUESTION 1 ---------------- */
//Add the complete qn as a comment
// Use camel case for variable names.
// Check the variable declarations in JavaScript and select the one that is appropriate for your variables.

//Premitive Data types

//String  data type
let name = "Anagha";
console.log("The data type of the variable 'name' is: " + typeof name);

//Number data type
//Why did you used let for decalaration?

let num = 15;
console.log("The data type of the variable 'num' is: " + typeof num);

//BigInt data type
let bignum = BigInt(98722479429853987423);
console.log("The data type of the variable 'bignum' is: " + typeof bignum);

//Boolean data type
let completed = true;
console.log(
  "The data type of the variable 'completed' is: " + typeof completed
);

//Undefined data type
let content;
console.log("The data type of the variable 'content' is: " + typeof content);

//Null data type
let nothing = null;
console.log("The data type of the variable 'nothing' is: " + typeof nothing);

//Symbol data type
let val = Symbol("welcome");
console.log("The data type of the variable 'val' is: " + typeof val);

//Non-Premitive Data types
//Object data type

//Array
let fruits = ["apple", "orange", "mango"];
console.log("The data type of the variable 'fruits' is: " + typeof fruits);

//check whether function is a data type or not
//Function
function greeting() {
  console.log("Good Morning!");
}
console.log("The data type of the variable 'greeting' is: " + typeof greeting);

//Object
let obj = { a: 123, b: 456, c: 789 };
console.log("The data type of the variable 'obj' is: " + typeof obj);

/* -------------    QUESTION 2 ---------------- */

let strTemplateLiterals = `${name} ${num} ${bignum} ${completed} ${content} ${nothing} ${fruits}`;
console.log(strTemplateLiterals);

let strWithoutTemplateLiterals =
  name +
  " " +
  num +
  " " +
  bignum +
  " " +
  completed +
  " " +
  content +
  " " +
  nothing +
  " " +
  fruits;
console.log(strWithoutTemplateLiterals);

/* -------------    QUESTION 3 ---------------- */
alert("This is an alert");
