/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const swap = (nums, i, j) => {
  const tmp = nums[i]
  nums[i] = nums[j]
  nums[j] = tmp
}

var sortColors = function (nums) {
  if (nums.length <= 1) {
    return nums
  }

  let whiteIndex = 0
  let blueIndex = nums.length - 1

  for (let i = 0; i <= blueIndex;) {
    const num = nums[i]
    if (num === 0) {
      swap(nums, i, whiteIndex)
      whiteIndex++
      if (whiteIndex > i) {
        i = whiteIndex
      }
    } else if (num === 2) {
      swap(nums, i, blueIndex)
      blueIndex--
    } else if (num === 1) {
      i++
    }
  }
  return nums
};