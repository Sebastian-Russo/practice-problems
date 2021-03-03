// Number:       1  2  3  4  5  6  7   8   9  10
// Fib Number:   0, 1, 1, 2, 3, 5, 8, 13, 21, 34

/**************** Fibonacci For Loop **************************/ 
function fibonacciFor(n) {

  let fibArray = [0,1];

  for (let i=2; i<n; i++) {
    fibArray.push(fibArray[i-1] + fibArray[i-2]) 
  }
  return fibArray[n-1] // the index of n-1 in the fib array 
}

// console.log(fibonacciFor(6)) // 5
// console.log(fibonacciFor(10)) // 34 

/**************** Fibonacci Recursive Loop **************************/ 
function fibonacciRecursive(n) {
  if (n < 3) {
    return n - 1;
  } 

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// console.log(fibonacciRecursive(6))
// console.log(fibonacciRecursive(10))
