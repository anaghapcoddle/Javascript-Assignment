/* eslint-disable no-console */
/* 1. ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function
and console each item by using switch statement. */

let array1 = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql'];

array1 = array1.map((item, index) => {
  const n = index;
  switch (n) {
    case n:
      console.log(item);
      break;
    default:
      console.log('Item not found');
      break;
  }
  return array1;
});

/* 2. [1, 2, 3, 4. 5, 6] : Write a closure function to delete indexes 5 and 2 of this array. */

console.log('\n');
const deleteArrayItems = (function () {
  const closureFnArray = [1, 2, 3, 4.5, 6];
  return function () {
    closureFnArray.splice(5, 1);
    closureFnArray.splice(2, 1);
    console.log(closureFnArray);
  };
}());

deleteArrayItems();

/* 3. Use constructor method to console all elements of the passed array.
(the array will be passed to the constructor method) */

console.log('\n');

class Constructor1 {
  constructor(arr1) {
    this.arr1 = arr1;
  }

  printElements() {
    this.arr1.forEach((ele) => {
      console.log(ele);
    });
  }
}

const constructorArray = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql'];
const obj1 = new Constructor1(constructorArray);

obj1.printElements();

/* 4. Create a function that takes 2 arguments, 1st argument being any array of items,
2nd being any one of the item name either in the passed array or not in the passed array,
the function should delete the passed item if it exists in the array,
if it doesn't exist then the item should be inserted into the array, finally console the output. */

console.log('\n');
const numbersArray = [1, 2, 3, 4, 5.6];

function checkArrayItem(arr, item) {
  if (arr.includes(item)) {
    console.log('Element already exists in array');
    const index = arr.indexOf(item);
    arr.splice(index, 1);
  } else {
    numbersArray.push(item);
    console.log('Element does not exist in the array, The element is now inserted into the array.');
  }
  console.log(`The output is : ${numbersArray}`);
}

checkArrayItem(numbersArray, 19);

/* 5. Create a self-invoking function to console you name. */

console.log('\n');
(function () {
  console.log('My name is Anagha.');
}());

/* 6. {a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }: Using this object make an array
consisting of all the keys of the given object in reverse order.
(output should be ['q', 'p', 'c', 'f', 'b', 'a']) */

console.log('\n');
const obj = {
  a: 'one', b: '2', f: '5', c: '33', p: 'do', q: 'one',
};
const keyArray = Object.keys(obj);
const reversedArray = keyArray.reverse();
console.log(reversedArray);

/* 7. { data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},{a:'sixty', id:'24'},
4 {a:'five', id:'212'}] } From the given object remove the data array item with id as '24'.
(consider that the data arrays order will be different every time you get,
so write code in such a way that given any object it will remove
the item with id as 24 if it exists ) */

console.log('\n');
const outerObj = {
  data: [{ a: 'one', id: '22' }, { a: 'four', id: '7' }, { a: 'six', b: '2' }, { a: 'sixty', id: '24' },
    { a: 'five', id: '212' }],
};

const outerObjArr = Object.entries(outerObj);
const dataArr = outerObjArr[0];
const arrOfObjects = dataArr[1];

arrOfObjects.forEach((ele) => {
  const eleVal = Object.values(ele);

  if (eleVal.includes('24')) {
    const ind = arrOfObjects.indexOf(ele);
    arrOfObjects.splice(ind, 1);
  }
});

console.log('The output object is : ', outerObj);

/* 8. Given var string = "Javascript is the King of the web." */

console.log('\n');
const string = 'Javascript is the King of the web.';

//a) Get the length of the string.

const stringLength = string.length;

//b) Print the 8th character of the string without using any function.

const EigthCharacter = string.charAt(8 + 1);

//c) Execute the above code from browser console.

console.log(stringLength);
console.log(EigthCharacter);

//d) Get the position of the word "King" in string.

console.log(string.indexOf('King'));

//e) Replace "King" with "Emperor".

console.log(string.replace('King', 'Emperor'));

//f) Insert the string "new” before the word "King".

const indexOfKing = string.indexOf('King');
const newString = (`${string.slice(0, indexOfKing)}new ${string.slice(indexOfKing)}`);
console.log(newString);

//g) Get the words in string as an array.

const wordsInStringAsArray = string.split(' ');
console.log(wordsInStringAsArray);

//h) Extract and print the words "is the King" from string.

const subString = 'is the King';
const firstIndexOfSubstring = string.indexOf('is the King');
const lastIndexOfOfSubstring = firstIndexOfSubstring + subString.length;
console.log(string.slice(firstIndexOfSubstring, lastIndexOfOfSubstring));

//i) Get the count of occurrences of the strings "the" and "of" in string.

const countOfThe = ('Javascript is the King of the web.'.match(/the/g).length);
const countOfOf = ('Javascript is the King of the web.'.match(/of/g).length);
console.log('The number of occurences of "the" is :', countOfThe);
console.log('The number of occurences of "of" is :', countOfOf);

//j) pad string with "*" and set the total length of the string as 30, displayed at right side.

const stringToPad = 'Javascript is the King of the web.';
const paddedString = stringToPad.padEnd(30, '*');
console.log(paddedString);
console.log(stringToPad.length); //String did not Pad because its length is already greater than 30.

