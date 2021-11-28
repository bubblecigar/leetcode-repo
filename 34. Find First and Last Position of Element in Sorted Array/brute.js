/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (target < nums[0] || target > nums[nums.length - 1]) {
    return [-1, -1]
  }
  if (nums.length === 0) {
    return [-1, -1]
  }
  if (nums.length === 1) {
    return nums[0] === target ? [0, 0] : [-1, -1]
  }

  let leftIndex = 0
  let rightIndex = nums.length - 1
  let targetIndex = null
  while (targetIndex === null) {
    const leftNumber = nums[leftIndex]
    const rightNumber = nums[rightIndex]
    const centerIndex = Math.floor((leftIndex + rightIndex) / 2)
    const centerNumber = nums[centerIndex]
    if (leftNumber === target) {
      targetIndex = leftIndex
      break
    }
    if (centerNumber === target) {
      targetIndex = centerIndex
      break
    }
    if (rightNumber === target) {
      targetIndex = rightIndex
      break
    }
    if (centerIndex === leftIndex) {
      // which mean leftIndex adjscent to rightIndex, we have traversed all numbers
      targetIndex = -1
      break
    }

    if (target < centerNumber) {
      rightIndex = centerIndex - 1
    }
    if (target > centerNumber) {
      leftIndex = centerIndex + 1
    }
  }
  if (targetIndex === -1) {
    return [-1, -1]
  } else {
    let firstIndex = targetIndex
    let lastIndex = targetIndex
    while (firstIndex >= 0) {
      if (nums[firstIndex - 1] === target) {
        firstIndex--
      } else {
        break
      }
    }
    while (lastIndex < nums.length) {
      if (nums[lastIndex + 1] === target) {
        lastIndex++
      } else {
        break
      }

    }
    return [firstIndex, lastIndex]
  }
};