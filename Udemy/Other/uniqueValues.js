function uniqueValues(arr) {
  let pointerOne = 0;
  let pointerTwo = 1;
  let counter = 0;
  if (arr.length !== 0) { 
    counter += 1;
  } else {
    return 0;
  }

  while(pointerTwo < arr.length) {
    arr[pointerOne] !== arr[pointerTwo] ? counter++ : null
    pointerOne++;
    pointerTwo++;
  }

  return counter;
}


console.log(uniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(uniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(uniqueValues([])) // 0
console.log(uniqueValues([-2, -1, -1, 0, 1])) // 4