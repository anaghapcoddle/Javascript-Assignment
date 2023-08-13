/* -------------    QUESTION 1 ---------------- */

//String  data type
const studentName = 'Emma';
console.log(`The data type of the variable 'name' is: ${typeof studentName}`);

//Number data type
let num = 15;
console.log("The data type of the variable 'num' is: " + typeof num);

//BigInt data type
let phoneNumber = BigInt(9595262520);
console.log("The data type of the variable 'bignum' is: " + typeof bignum);

//Boolean data type
let completed = true;
console.log("The data type of the variable 'completed' is: " + typeof completed);

//Undefined data type
let content;
console.log("The data type of the variable 'content' is: " + typeof content);

//Null data type
let nothing = null
console.log("The data type of the variable 'nothing' is: " + typeof nothing);

//Symbol data type
let val = Symbol('welcome');
console.log("The data type of the variable 'val' is: " + typeof val);

//Non-Premitive Data types
//Object data type

//Array
let fruits = ["apple", "orange", "mango"]
console.log("The data type of the variable 'fruits' is: " + typeof fruits);

//Function
function greeting(){
    console.log("Good Morning!");
}
console.log("The data type of the variable 'greeting' is: " + typeof greeting);

//Object
let obj = {a:123, b:456,c:789};
console.log("The data type of the variable 'obj' is: " + typeof obj);

/* -------------    QUESTION 2 ---------------- */

let strTemplateLiterals =(`${name} ${num} ${bignum} ${completed} ${content} ${nothing} ${fruits}`);
console.log(strTemplateLiterals); 


let strWithoutTemplateLiterals = (name + " " + num + " " +bignum + " " +completed + " " + content + " " + nothing + " " + fruits);
console.log(strWithoutTemplateLiterals);

/* -------------    QUESTION 3 ---------------- */

alert("This is an alert");