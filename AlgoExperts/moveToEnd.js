const moveToEnd = function(array, toMove) {
  let i = 0;
  let j = array.length - 1;
  while(i < j) {
    while(i < j && array[j] === toMove) j--;
    if(array[i] === toMove) swap(i, j, array);
    i++;
  }

  function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }

  return array;
}

const array = [2, 1, 2, 2, 2, 3, 4, 2];
const num = 2;
const test = moveToEnd(array, num);
console.log(test);