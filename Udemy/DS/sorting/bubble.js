const bubbleSort = function(arr) {
  let noSwaps;
  for(let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for(let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
    console.log(array);
  }
  return arr;
}


const array = [11, 1, 2, 3, 4, 5, 6, 7];
const sorted = bubbleSort(array);
console.log(sorted);