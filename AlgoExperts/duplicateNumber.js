const findDuplicate = function(arr) {
  const visited = {};
  for(let i = 0; i < arr.length; i++) {
    if(visited[arr[i]]) {
      return arr[i];
    } else {
      visited[arr[i]] = true;
    }
  }
  return null;
}

const arr = [1,3,1,4,2,5,9];
const value = 2;
const test = findDuplicate(arr, value);
console.log(test);