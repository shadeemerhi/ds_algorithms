const validateSubsequence = function(array, sequence) {
  let seqIdx = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] === sequence[seqIdx]) seqIdx++;
  }
  return seqIdx === sequence.length;

}

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];
console.log(validateSubsequence(array, sequence));