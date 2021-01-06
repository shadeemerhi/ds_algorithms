function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let freqCounter1 = {};
  for (let char of str1) {
    freqCounter1[char] = (freqCounter1[char] || 0) + 1
  }

  let freqCounter2 = {};
  for (let char of str2) {
    freqCounter2[char] = (freqCounter2[char] || 0) + 1
  }

  for (const key in freqCounter1) {
    if (freqCounter1[key] !== freqCounter2[key]) {
      return false
    }
  }
  return true;

}

console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('', '')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true