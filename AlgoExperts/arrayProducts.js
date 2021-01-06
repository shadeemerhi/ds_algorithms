// function arrayOfProducts(array) {
// 	const products = [];
// 	for(let i = 0; i < array.length; i++) {
//     let product = 1;
// 		for(let j = 0; j < array.length; j++) {
//       if(array[i] === array[j]) continue;
//       product = product*array[j];
//     }
//     products.push(product);
// 	}
// 	return products;
// }

const arrayOfProducts = function(array) {
  const products = [];
  let i = 0;
  while(i < array.length) {
    let product = 1;
    let leftIdx = i - 1;
    let rightIdx = i + 1;
    while(leftIdx >= 0) {
      product = product * array[leftIdx];
      leftIdx--;
    }
    while(rightIdx < array.length) {
      product = product * array[rightIdx];
      rightIdx++;
    }
    products.push(product);
    i++;
  }
  return products;
}


const array = [5,1,4,2]; // [8, 40, 10, 20]
const test = arrayOfProducts(array);
console.log(test);