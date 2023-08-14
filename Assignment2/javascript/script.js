/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-console */
//Give proper names
const arrayOfIntegers = ['1', '2', '3', '4', '5', '6', '7'];

//1. a. Remove number "6" from the array and console the length of the array.

// Don't hardcode the position of 6. find it.
const positionOfNumber = arrayOfIntegers.indexOf('6');
arrayOfIntegers.splice(positionOfNumber, 1);

const lengthOfArray = arrayOfIntegers.length;
console.log(`The length of the array is : ${lengthOfArray}`);

/* b. Convert all the items of the array to data type number and console each items data type,
use any of the array iteration methods provided by JS for iteration. */

//Read the question properly.

const arrayToPrintDatatype = ['1', '2', '3', '4', '5', '6', '7'];
arrayToPrintDatatype.forEach((value, index) => {
  //where is declaration
  arrayToPrintDatatype[index] = Number(value);
});

arrayToPrintDatatype.forEach((value, index) => {
  console.log(`Data type of ${value} is : ${typeof arrayToPrintDatatype[index]}`);
});

/* c. Remove last three items of the array, use JS provided array method, then console the array
 and then add "one" and "two" (strings) to the beginning of the array and console the array. */

const arrayToRemoveItems = ['1', '2', '3', '4', '5', '6', '7'];
for (let i = 0; i < 3; i += 1) {
  arrayToRemoveItems.pop();
}

//check other methods
arrayToRemoveItems.unshift('one', 'two');
console.log(arrayToRemoveItems);

/* d. Using any one of the array iteration methods console the string concatenation of all items
of the array and also console the sum of all the items ( convert to integer before calculating)*/

//what will be the value of arr while reaching this line
const arrayForStringConcatendation = ['1', '2', '3', '4', '5', '6', '7'];

//do both task with a single loop
let concatenatedString = '';
let sum = 0;
arrayForStringConcatendation.forEach((value) => {
  concatenatedString = concatenatedString.concat(value);
  sum += parseInt(value, 10);
});

console.log(concatenatedString);
console.log(sum);

/* e. Filter out item "3" from the array and console the array (use any array method)*/
//read the question properly

const arrayToFilter = ['1', '2', '3', '4', '5', '6', '7'];
const filteredArray = arrayToFilter.filter((value) => value !== '3');
console.log(filteredArray);

/* f. Iterate the array and console the item, when item is either "3", "6" or "7" */

const arrayToCheck = ['1', '2', '3', '4', '5', '6', '7'];

arrayToCheck.forEach((item) => {
  //use ===
  if (item === '3' || item === '6' || item === '7') {
    console.log(item);
  }
});

/* g. [1, 2, "3", 4, 5, 6, "7"]  Compare this array with the above given array and console only
if both items of the array have same data type.
(Compare each item of this array with each item of the other array) */
//write the output and describe it's working

const firstArray = ['1', '2', '3', '4', '5', '6', '7'];
const secondArray = [1, 2, '3', 4, 5, 6, '7'];

firstArray.forEach((valueOfFirstArray, index) => {
  const valueOfSecondArray = secondArray[index];
  if (typeof firstArray[index] === typeof secondArray[index]) {
    console.log(+valueOfFirstArray, +valueOfSecondArray);
  }
});

/*For each item of the 'firstArray', the variable 'valueOfSecondArray' is set as the item with
 equivalent index value in the second array. We can use this method as the length of both the arrays
 are same. Then using a if condition, it is checked whether the data type of the item in firstArray
 equals to the datatype of corresponding item in Second Array.
 For example, valueOfSecondArray = secondArray[0];
 if (type of typeof firstArray[0] === typeof secondArray[0]),
 i.e., (type of '1' === typeof 1, then it consoles both '1' and 1. Otherwise it does not console.*/

/* h. [0,2,3,7,5,6,8] iterate the array and multiply each item by its
index value and console the result only if result is greater than 40. */

const arrayToMultiply = [0, 2, 3, 7, 5, 6, 8];

arrayToMultiply.forEach((index) => {
  const multipliedValue = arrayToMultiply[index] * index;
  if (multipliedValue > 40) {
    console.log(multipliedValue);
  }
});

/* i. Create two arrays with five items each and merge the array into a single array and
then console it. */
const firstArrayWithFiveItems = [1, 2, 3, 4, 5];
const secondArrayWithFiveItems = [10, 9, 8, 7, 6];

const mergedArray = firstArrayWithFiveItems.concat(secondArrayWithFiveItems);
console.log(mergedArray);

/* 2.   *
       * *
      * * *
     * * * *
    * * * * *
​Console this star pattern */

const n = 5;
let str = '';
for (let i = 1; i <= n; i += 1) {
  for (let j = 1; j <= n - i; j += 1) {
    str += ' ';
  }
  for (let k = 0; k < i; k += 1) {
    str += ' *';
  }
  str += '\n';
}
console.log(str);
