//Give proper names
let arr = ["1", "2", "3", "4", "5", "6", "7"];

//1. a. Remove number "6" from the array and console the length of the array

// Don't hardcode the position of 6. find it.
arr.splice(5, 1);
len = arr.length;
console.log("The length of the array is : " + len);

/* b. Convert all the items of the array to data type number and console each items data type, 
use any of the array iteration methods provided by JS for iteration. */

//Read the question properly.
arr.forEach((n) => {
  //where is declaration
  elementDatatypeNumber = Number(n);
  console.log("Data type of " + n, "is : " + typeof elementDatatypeNumber);
});

/* c. Remove last three items of the array, use JS provided array method, 
then console the array and then add "one" and "two" (strings) to the beginning of the array and console the array. */

arr.splice(-3, 3);
console.log(arr);
//check other methods
arr.splice(0, 0, "One", "Two");
console.log(arr);

/* d. Using any one of the array iteration methods console the string concatenation of all items 
of the array and also console the sum of all the items ( convert to integer before calculating)*/
//what will be the value of arr while reaching this line
//do both task with a single loop
let concatenatedString = "";
arr.forEach((n) => {
  concatenatedString = concatenatedString.concat(n);
});
console.log(concatenatedString);

arr = ["1", "2", "3", "4", "5", "6", "7"];
sum = 0;
arr.forEach((n) => {
  let elementOfDatatypeInteger = parseInt(n);
  sum = sum + elementOfDatatypeInteger;
});
console.log(sum);

/* e. Filter out item "3" from the array and console the array (use any array method)*/
//read the question properly
let indexValue = arr.indexOf("3");
arr.splice(indexValue, 1);
console.log(arr);

/* f. Iterate the array and console the item, when item is either "3", "6" or "7" */

arr = ["1", "2", "3", "4", "5", "6", "7"];

arr.forEach((n) => {
  //use ===
  if (n == "3" || n == "6" || n == "7") {
    console.log(n);
  }
});

/* g. [1, 2, "3", 4, 5, 6, "7"]  Compare this array with the above given array and console only if both items 
of the array have same data type. (Compare each item of this array with each item of the other array) */
//write the output and describe it's working
let arr2 = [1, 2, "3", 4, 5, 6, "7"];

arr.forEach((num1, index) => {
  let num2 = arr2[index];
  if (typeof arr[index] == typeof arr2[index]) {
    console.log(+num1, +num2);
  }
});

/* h. [0,2,3,7,5,6,8] iterate the array and multiply each item by its 
index value and console the result only if result is greater than 40. */

let arr3 = [0, 2, 3, 7, 5, 6, 8];

arr3.forEach((i) => {
  let multipliedValue = arr3[i] * i;
  if (multipliedValue > 40) {
    console.log(multipliedValue);
  }
});

// i. Create two arrays with five items each and merge the array into a single array and then console it.
let firstArray = [1, 2, 3];
let secondArray = [6, 7, 8];

let mergedArray = firstArray.concat(secondArray);
console.log(mergedArray);

/* 2.   *
       * *
      * * *
     * * * *
    * * * * *

​Console this star pattern */

let n = 5;
str = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    str += " ";
  }
  for (let k = 0; k < i; k++) {
    str += " *";
  }
  str += "\n";
}
console.log(str);
