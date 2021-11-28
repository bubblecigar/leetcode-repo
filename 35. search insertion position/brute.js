/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.length === 0) {
    return 0
  }
  if (nums.length === 1) {
    return target === nums ? 0 : (
      target > nums ? 1 : 0
    )
  }
  if (target < nums[0]) {
    return 0
  }
  if (target > nums[nums.length - 1]) {
    return nums.length
  }

  let targetIndex = null
  let leftIndex = 0
  let rightIndex = nums.length - 1
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
    const isAdjacent = leftIndex === centerIndex
    if (isAdjacent) {
      targetIndex = leftIndex + 1
      break
    }

    if (target > centerNumber) {
      leftIndex = centerIndex
    }
    if (target < centerNumber) {
      rightIndex = centerIndex
    }
  }
  return targetIndex
};