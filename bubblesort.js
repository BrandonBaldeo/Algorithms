// bubbleSort, the worst (sane) sorting algortithm!
// not at all efficient, but it's easy to understand
// start from the bottom, compare each item against its neighbor,
// and swap them if they need to be swapped

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let test_a = [8, 1, 4, 5, 9, 2, 7, 6, 3];
bubbleSort(test_a);
console.log(test_a); // should display [1, 2, 3, 4, 5, 6, 7, 8, 9]

let test_b = [1, 3, 2, 3, 6, 3, 3, 3, 3, 3, 5, 9, 3];
bubbleSort(test_b);
console.log(test_b); // should display [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 5, 6, 9]

// let x = [2, 1, 3, 4, 5];
// let temp = x[0];
// x[0] = x[1];
// x[1] = temp;

// function bubbleSort(arr){
//   // move from left to right in the array starting at index 0
// for (let j = 0; j < arr.length -1; j++){
//   for (let i = 0; i < arr.length - j ; i++){
//       // compar the value at the current index wit the value at the next- if value is greater than the next
//       if (arr[i] > arr[i+1]){
//           //if out of order,Swap value at the current index with the value of the next
//           [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
//       }
//   }

// }
// return arr
// }
