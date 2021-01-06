const longestRange = function(array) {
  if(array.length === 1) return [array[0], array[0]];
	array.sort((a,b) => a - b);
  let rangeObj = {};
  let largestRangeObj = {};
  rangeObj[array[0]] = true;
  for(let i = 1; i < array.length; i++) {
    const current = array[i];
    if(!rangeObj[current-1]) {
      rangeObj = {};
    }
    rangeObj[current] = true;
    if(Object.keys(rangeObj).length > Object.keys(largestRangeObj).length) largestRangeObj = rangeObj;
  }
  const range = Object.keys(largestRangeObj).sort((a,b) => a-b);
  return [parseInt(range[0]), parseInt(range[range.length-1])];  
}

const array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];
const range = longestRange(array);
console.log(range);