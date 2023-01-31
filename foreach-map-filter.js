/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:


*/

function doubleValues(arr) {
  let doubleArr = [];
  arr.forEach(function (num) {
    let numDub = num * 2;
    doubleArr.push(numDub);
  });
  return doubleArr;
}
// let try1 = doubleValues([1, 2, 3]); // [2,4,6]
// let try2 = doubleValues([5, 1, 2, 3, 10]); // [10,2,4,6,20]

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function


*/
function onlyEvenValues(arr) {
  let evenArr = [];
  arr.forEach(function (num) {
    if (num % 2 === 0) {
      evenArr.push(num);
    }
  });
  return evenArr;
}
// Examples:
// let try1 = onlyEvenValues([1, 2, 3]); // [2]
// let try2 = onlyEvenValues([5, 1, 2, 3, 10]); // [2,10]

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

*/
function showFirstAndLast(arr) {
  let newArr = [];
  arr.forEach(function (word) {
    let firstAndLast = word[0] + word[word.length - 1];
    newArr.push(firstAndLast);
  });
  return newArr;
}

// Examples:
// let try1 = showFirstAndLast(["colt", "matt", "tim", "test"]); // ["ct", "mt", "tm", "tt"]
// let try2 = showFirstAndLast(["hi", "goodbye", "smile"]); // ['hi', 'ge', 'se']

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    
*/
function addKeyAndValue(arr, key, value) {
  arr.forEach(function (obj) {
    obj[key] = value;
  });
  return arr;
}
// let try1 = addKeyAndValue(
//   [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
//   "title",
//   "instructor"
// );

// [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
  obj = {};
  arr = str.toLowerCase().split("");
  arr.forEach(function (letter) {
    if ("aeiou".includes(letter)) {
      if (obj.hasOwnProperty(letter)) {
        obj[letter] = obj[letter] + 1;
      } else {
        obj[letter] = 1;
      }
    }
  });
  return obj;
}

// let try1 = vowelCount("Elie"); // {e:2,i:1};
// let try2 = vowelCount("Tim"); // {i:1};
// let try3 = vowelCount("Matt"); // {a:1})
// let try4 = vowelCount("hmmm"); // {};
// let try5 = vowelCount("I Am awesome and so are you"); // {i: 1, a: 4, e: 3, o: 3, u: 1};
/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
  return arr.map(function (num) {
    return num * 2;
  });
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
  return arr.map(function (num, i) {
    return num * i;
  });
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {
  return arr.map(function (obj) {
    return obj[key];
  });
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
  return arr.map(function (obj) {
    return `${obj.first} ${obj.last}`;
  });
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    
*/

function filterByValue(arr, key) {
  return arr.filter(function (obj) {
    return obj.hasOwnProperty(key);
  });
}
// let try1 = filterByValue(
//   [
//     { first: "Elie", last: "Schoppik" },
//     { first: "Tim", last: "Garcia", isCatOwner: true },
//     { first: "Matt", last: "Lane" },
//     { first: "Colt", last: "Steele", isCatOwner: true },
//   ],
//   "isCatOwner"
// ); // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

// function find(arr, searchValue) {
//   let answer = arr.filter(function (val) {
//     return val === searchValue;
//   });
//   return answer[0];
// }
function find(arr, searchValue) {
  return arr.filter(function (val) {
    return val === searchValue;
  })[0];
}
// let try1 = find([1, 2, 3, 4, 5], 3); // 3
// let try2 = find([1, 2, 3, 4, 5], 10); // undefined
/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    
*/

function findInObj(arr, key, searchValue) {
  return arr.filter(function (obj) {
    return obj[key] === searchValue;
  })[0];
}
// let try1 = findInObj(
//   [
//     { first: "Elie", last: "Schoppik" },
//     { first: "Tim", last: "Garcia", isCatOwner: true },
//     { first: "Matt", last: "Lane" },
//     { first: "Colt", last: "Steele", isCatOwner: true },
//   ],
//   "isCatOwner",
//   true
// ); // {first: 'Tim', last:"Garcia", isCatOwner: true}
/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
   
*/

function removeVowels(str) {
  let arr = str.toLowerCase().split("");
  let newArr = arr.filter(function (letter) {
    if (!"aeiou".includes(letter)) {
      return letter;
    }
  });
  return newArr.toString().replaceAll(",", "");
}
// removeVowels("Elie"); // ('l')
// removeVowels("TIM"); // ('tm')
// removeVowels("ZZZZZZ"); // ('zzzzzz')
/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
   
*/

function doubleOddNumbers(arr) {
  let odds = arr.filter(function (num) {
    return num % 2 === 1;
  });
  return odds.map(function (num) {
    return num * 2;
  });
}

let try1 = doubleOddNumbers([1, 2, 3, 4, 5]); // [2,6,10]
let try2 = doubleOddNumbers([4, 4, 4, 4, 4]); // []
