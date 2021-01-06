const maxArea = function(heights) {

  if(!heights.length) return 0;
  let maxArea = -Infinity;
  let left = 0;
  let right = heights.length-1;
  let currentArea;

  while(left < right) {
    currentArea = Math.min(heights[left], heights[right]) * (right - left);
    if(currentArea > maxArea) maxArea = currentArea;
    if(heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return maxArea;
}

// const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const heights = [];
const result = maxArea(heights);
console.log(result);
