const searchInsert = function(nums, target) {

  if(target <= nums[0]) return 0;
  if(target > nums[nums.length - 1]) return nums.length;
  let prev = nums[0];
  let index;
  let i = 1;
  while(i < nums.length) {
    if(nums[i] === target) return i;
    if(prev < target && nums[i] > target) index = i;
    prev = nums[i];
    i++;
  }
  return index;
}


const nums = [1, 3, 5, 6];
const target = 0;
const result = searchInsert(nums, target);
console.log(result);