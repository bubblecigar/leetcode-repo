/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 0) {
    return -1
  }
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1
  }

  let leftIndex = 0
  let rightIndex = nums.length - 1
  let answer = undefined
  let counts = Math.ceil(Math.log2(nums.length))
  while (counts >= 0) {
    counts--

    const leftNumber = nums[leftIndex]
    const rightNumber = nums[rightIndex]

    const centerIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (centerIndex === leftIndex || centerIndex === rightIndex) {
      if (leftNumber === target) { answer = leftIndex; break }
      if (rightNumber === target) { answer = rightIndex; break }
      answer = -1; break
    }

    const centerNumber = nums[centerIndex]
    if (centerNumber > leftNumber) {
      const targetWithin = target >= leftNumber && centerNumber >= target
      if (targetWithin) {
        rightIndex = centerIndex
      } else {
        leftIndex = centerIndex + 1
      }
    } else if (centerNumber < rightNumber) {
      const targetWithin = target >= centerNumber && rightNumber >= target
      if (targetWithin) {
        leftIndex = centerIndex
      } else {
        rightIndex = centerIndex - 1
      }
    }
  }
  return answer
};