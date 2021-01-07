const validAnagram = function(s, t) {

  if(s.length !== t.length) return false;
  const sLetters = {};
  const tLetters = {};

  // Character frequency counter for s
  for(let i = 0; i < s.length; i++) {
    sLetters[s.charAt(i)] ? sLetters[s.charAt(i)]++ : sLetters[s.charAt(i)] = 1;
  }

  // Character frequency counter for t
  for(let i = 0; i < t.length; i++) {
    tLetters[t.charAt(i)] ? tLetters[t.charAt(i)]++ : tLetters[t.charAt(i)] = 1;
  }

  for(const charKey in sLetters) {
    if(tLetters[charKey] !== sLetters[charKey]) return false;
  }

  return true;

}

const s = 'shadee';
const t = 'hedsae';
console.log(validAnagram(s, t));