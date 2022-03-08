//https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  return arr;
}

console.log(insertionSort([5, 23, 0, 12, 8, 6])); //[0,5,6,8,12,23]
