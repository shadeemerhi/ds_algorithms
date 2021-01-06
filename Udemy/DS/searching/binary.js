function binarySearch(array, value){
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((right + left) / 2);
  while(left <= right) {
    if(array[mid] === value) {
      return mid;
    }
    else if(value < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((right+left)/2); 
  }
  return -1;
}


const array = [1,4,5,8,19,40,43,97];
const result = binarySearch(array, 43);
console.log(result);