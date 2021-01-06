const merge = function(arr1, arr2) {
  let i = 0;
  let j = 0;
  const result = [];
  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if(arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      result.push(arr2[j]);
      i++;
      j++;
    }
  }

  while(i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while(j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}


const mergeSort = function(array) {
  if(array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const first = mergeSort(array.slice(0, mid));
  const second = mergeSort(array.slice(mid));

  return merge(first, second);
}

const arr = [8, 7, -6, 5, 4, 3, 2, 1];
console.log(mergeSort(arr));