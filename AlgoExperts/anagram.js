const isAnagram = function(s, t) {

  if(s.length !== t.length) return false;

  let freq1 = {};
  let freq2 = {};
  for(let i = 0; i < s.length; i++) {
    s[i] in freq1 ? freq1[s[i]]++ : freq1[s[i]] = 1;
  }

  for(let i = 0; i < t.length; i++) {
    t[i] in freq2 ? freq2[t[i]]++ : freq2[t[i]] = 1;
  }

  for(const key in freq1) {
    if(freq2[key] !== freq1[key]) return false;
  }

  return true;
}

const s = "listen";
const t = "silent";

const test = isAnagram(s, t);
console.log(test);