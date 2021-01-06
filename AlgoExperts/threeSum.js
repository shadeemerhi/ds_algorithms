const threeSum = function(arr, targetSum) {

  const triplets = [];
  arr.sort((a, b) => a - b);
  for(let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while(left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];
      if(currentSum === targetSum) {
        triplets.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }
  return triplets;
}

const arr = [12, 3, 1, 2, -6, 5, -8, 6];
const target = -13;
const test = threeSum(arr, target);
console.log(test);