const twoSum = function(arr, target) {

  const results = [];
  const visited = {};
  for(const value of array) {

    const otherNum = target - value;
    if(visited[value]) results.push([value, otherNum]);
    visited[otherNum] = true;
  }
  return results;
}

const array = [3, 5, 2, -4, 8, 11];
const target = 7;
const result = twoSum(array, target);
console.log(result);
