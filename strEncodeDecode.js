// /*
// given a string with repeated consecutive characters, return the amount of each character as such:

// input: "aaabbbbcdd"

// output: "a3b4c1d2"

// */

// function encode(str) {
//   //set output to an empty string
//   let output = '';
//   //print out each letter from the string
//   let obj = {};
//   for (let x = 0; x < str.length; x++) {
//     if (str[x] in obj) {
//       //if the current char is a key in our object, then increment the value by 1
//       obj[str[x]] += 1;
//     } else {
//       //if the current character does not exist as a key in the object, create a key representing the current character and set the value to equal to 1.
//       obj[str[x]] = 1;
//     }
//   }
//   //loop through the object and add to the output the key and values from the object
//   for (const key in obj) {
//     console.log(`${key}: ${obj[key]}`);
//     output += key + obj[key];
//   }
//   return output;
// }
// /*
// {
//     a: 3,
//     b: 4,
//     c: 1,
//     d: 2
// }
// output = "a3b4c1d2"
// */

// console.log(encode('aaabbbbcdd')); //"a3b4c1d2"

/*
create a function called strDecode() that does the following: 

input: "a3b4c1d2"
output: "aaabbbbcdd"

*/

const strDecode = (str) => {
  let currChar = str[0];
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      newStr += currChar.repeat(str[i]);
    }
    currChar = str[i];
  }
  return newStr;
};

console.log(strDecode('a3b4c1d2'));
