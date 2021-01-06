const twoSum = function(arr, num) {

  const pairs = [];
  const visited = {};
  for(let i = 0; i < arr.length; i++) {
    const otherNum = num - arr[i];
    if(visited[otherNum]) {
      pairs.push([otherNum, arr[i]]);
    } else {
      visited[arr[i]] = true;
    }
  }
  return pairs;
}

const pairs = twoSum([3, 5, 2, -4, 8, 1, 6], 7); 
console.log(pairs);