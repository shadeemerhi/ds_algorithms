const isPalindrome = function(s) {

  if(s.length === 0) return true;
  s = s.replace(/[&\/\\#,+()$~%.@_'":*?<>{}]/g, '').replace(/ /gi, '').toLowerCase();
  console.log(s);

  let left = 0;
  let right = s.length-1;
  while(left < right) {
    if(s[left] !== s[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;

}

const input = "Eva, Can I Stab Bats In A Cave?";
const test = isPalindrome(input);
console.log(test);