const fibonacci = function(n, memo = [undefined, 1, 1]) {
  if(memo[n] !== undefined) return memo[n];
  const res = fibonacci(n-1, memo) + fibonacci(n-2, memo);
  memo[n] = res;
  return res;
}

const thing = fibonacci(20);
console.log(thing);