const insertionSort = function(array) {
  for(var i = 1; i < array.length; i++) {
    const current = array[i];
    for(var j = i - 1; j >= 0 && array[j] > current; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = current;
  }
  return array;
}

const array = [2, 1, 9, 76, 4];
const sorted = insertionSort(array);
console.log(sorted);