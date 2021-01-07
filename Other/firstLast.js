const firstLast = function(nums, target) {
  const result = [];

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === target) result.push(i);
  }

  if(!result.length) return [-1, -1];
  if(result.length === 1) return [result[0], result[0]];
  return result;
}


const array = [3];
const target = 3;
const result = firstLast(array, target);
console.log(result);