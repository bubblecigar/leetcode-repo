/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let leftIndex = 0
  let rightIndex = numbers.length - 1

  while (leftIndex < rightIndex) {
    const leftNumber = numbers[leftIndex]
    const rightNumber = numbers[rightIndex]
    const sum = leftNumber + rightNumber
    if (sum === target) {
      return [leftIndex + 1, rightIndex + 1]
    } else if (sum > target) {
      rightIndex--
    } else {
      leftIndex++
    }
  }
};