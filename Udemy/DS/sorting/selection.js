const selectionSort = function(array) {

  let min;
  for(let i = 0; i < array.length; i++) {
    let min = i;
    for(let j = i + 1; j < array.length; j++) {
      if(array[j] < array[min]) min = j;
    }

    if(i !== min) {
      const temp = array[min];
      array[min] = array[i];
      array[i] = temp;
    }
  }
  return array;
}


const array = [32, 5, 3, 1, 99, 32, 0, 2, -4];
const sorted = selectionSort(array);
console.log(sorted);