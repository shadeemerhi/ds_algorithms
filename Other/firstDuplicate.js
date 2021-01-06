const firstDuplicate = function(array) {
  const visited = {};
  for(const value of array) {
    if(visited[value]) return value;
    visited[value] = true;
  }
  return null;
}

const array = [2, 1, 5, 2, 3, 3, 4];
console.log(firstDuplicate(array));