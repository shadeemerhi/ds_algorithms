const longestPeak = function(array){

  let i = 1;
  let longestPeak = 0;
  while(i < array.length-1) {
    if(array[i-1] < array[i] && array[i+1] < array[i]) {
      let leftIdx = i - 1;
      let rightIdx = i + 1;

      while(leftIdx >= 0 && array[leftIdx] > array[leftIdx-1]) {
        leftIdx--;
      }

      while(rightIdx < array.length && array[rightIdx] > array[rightIdx+1]) {
        rightIdx++;
      }
      const currentPeak = rightIdx - leftIdx + 1;
      longestPeak = Math.max(currentPeak, longestPeak);
    }
		i++;
	}
	return longestPeak;
}

// const array = [1, 2, 3, 4, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
const array = [1,2,1];
const test = longestPeak(array);
console.log(test);