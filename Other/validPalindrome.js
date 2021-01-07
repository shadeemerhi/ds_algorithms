const validPalindrome = function(string) {

  let left = 0;
  let right = string.length - 1;
  while(left < right) {
    if(string.charAt(left) !== string.charAt(right)) return false;
    left++;
    right--;
  }

  return true;
}

const string = 'racecar';
console.log(validPalindrome(string));