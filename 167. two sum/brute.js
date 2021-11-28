/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
  let answer
  for (let leftIndex = 0; leftIndex < numbers.length - 1; leftIndex++) {
      for (let rightIndex = leftIndex + 1; rightIndex < numbers.length; rightIndex++) {
          const sum = numbers[leftIndex] + numbers[rightIndex]
          if (sum === target) {
              answer = [leftIndex + 1, rightIndex + 1]
          }
      }
  }
  return answer
};