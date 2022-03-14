/*

create a function that accepts a string as an input and outputs an array with each word from the string


input: "  hello hey how   you   doing?   "
output: ["hello", "hey", "how", "you", "doing?"]

*/

const stringToWord = (str) => {
  let word = '';
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] != ' ') {
      word += str[i];
      //   console.log(str[i]);
    } else {
      if (word.length > 0) {
        arr.push(word);
        word = '';
      }
    }
  }
  return arr;
};
console.log(stringToWord('  hello hey how   you   doing?   '));
console.log(stringToWord(' good morning everyone!'));
/*
str = '  hello hey how   you   doing?   '
word = ''
arr= ['hello']
i=0,1,2,3,4,5,6,7,8
*/
