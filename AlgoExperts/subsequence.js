const validateSubsequence = function(arr, seq) {

  let arrIdx = 0;
  let seqIdx = 0;
  while(arrIdx < arr.length && seqIdx < seq.length) {
    if(arr[arrIdx] === seq[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === seq.length;

}

const array = [1, 2, 3, 4, 5, 6];
const sequence = [1, 3, 4, 6];
const test = validateSubsequence(array, sequence);
console.log(test);