const reverseString = function(s) {
  let left = 0;
  let right = s.length - 1;

  while(left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  return s;
}

const string = ['S', 'h', 'a', 'd', 'e', 'e'];
const test = reverseString(string);
console.log(test);