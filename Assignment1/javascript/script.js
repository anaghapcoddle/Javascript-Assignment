/* eslint-disable no-console */
/*1. Create variables with different data types available in JS and print their
     data types along with each variable name in the console. */

//Add the complete qn as a comment
// Use camel case for variable names.
// Check the variable declarations in JavaScript and select the one that is appropriate for your variables.

//String  data type
const studentName = 'Emma';
console.log(`The data type of the variable 'name' is: ${typeof studentName}`);

//Number data type
//Why did you used let for decalaration?

const studentAge = 15;
console.log(`The data type of the variable 'num' is: ${typeof studentAge}`);

//BigInt data type
// eslint-disable-next-line node/no-unsupported-features/es-builtins
const phoneNumber = BigInt('9872247942985398');
console.log(`The data type of the variable 'bignum' is: ${typeof phoneNumber}`);

//Boolean data type
const workCompleted = true;
console.log(`The data type of the variable 'completed' is: ${typeof workCompleted}`);

//Undefined data type
let content;
console.log(`The data type of the variable 'content' is: ${typeof content}`);

//Null data type
const nothing = null;
console.log(`The data type of the variable 'nothing' is: ${typeof nothing}`);

//Symbol data type
const carBrand = Symbol('Mercedes');
console.log(`The data type of the variable 'val' is: ${typeof carBrand}`);

//check whether function is a data type or not

/*2. Create a concatenated string with the above variables using template literals
     and without template literals. (separate each variable by space in the string) */

const strUsingTemplateLiterals = `${studentName} ${studentAge} ${phoneNumber} ${workCompleted} ${content} ${nothing}`;
console.log(strUsingTemplateLiterals);

// eslint-disable-next-line prefer-template
const strWithoutTemplateLiterals = (studentName + ' ' + studentAge + ' ' + phoneNumber + ' ' + workCompleted + ' ' + content + ' ' + nothing);
console.log(strWithoutTemplateLiterals);

/*3. Write a JS program to show an alert message on the loading of the website. */
// eslint-disable-next-line no-alert, no-undef
alert('This is an alert');
