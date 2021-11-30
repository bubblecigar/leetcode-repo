/**
 * @param {number} n
 * @return {number}
 */


const factorial = n => {
  if (n <= 1) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

var climbStairs = function (n) {
  let totalCombinations = 0
  for (let i = 0; 2 * i <= n; i++) {
    const numberOfTwoSteps = i
    const numberOfOneSteps = n - 2 * i
    const combinations = factorial(numberOfTwoSteps + numberOfOneSteps) / (factorial(numberOfTwoSteps) * factorial(numberOfOneSteps))
    totalCombinations += combinations
  }
  return totalCombinations
};