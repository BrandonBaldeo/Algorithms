/*
rotateString(str,num)
Given a string and a number, rotate the string by that number amount and return the rotated string

input: "good morning", 3
output: "inggood morn"


input: "abcde", 5
output: "abcde"


*/

/*
isRotation(str1,str2)
Given 2 strings, return true if they are rotations of one another, false if they are not

input: "good morning", "rninggood mo"
output: true


input: "abcde", "abccde"
output: false


*/
const rotateString = (str, val) => {
  var newStr = str;
  for (var i = 0; i < val; i++) {
    newStr += newStr[0];
    newStr = newStr.substr(1);
  }
  return newStr;
};

//2
const isRotation = (str, str2) => {
  if (str.length != str2.length) {
    return false;
  }
  var newStr = str2;
  for (var i = 0; i < str.length; i++) {
    if (newStr == str) {
      return true;
    }
    newStr += newStr[0];
    newStr = newStr.substr(1);
    console.log(newStr);
  }
  return false;
};

console.log(rotateString('hello', 3));
console.log(isRotation('good morning', 'rninggood mo'));
