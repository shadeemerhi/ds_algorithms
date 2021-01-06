function isMonotonic(array) {

  let decreasing = true;
  let increasing = true;

  for (let i = 0; i < array.length - 1; i++) {
    if(array[i] < array[i+1]) decreasing = false;
    if(array[i] > array[i+1]) increasing = false;
  }
  
  return decreasing || increasing;
}


const array = [-1, -5, -10, -1100, -1101, -1100, -1102, -9001];
const test = isMonotonic(array);
console.log(test);