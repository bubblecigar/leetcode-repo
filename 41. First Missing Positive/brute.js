/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length;) {
    const num = nums[i]
    if (num <= 0 || num < i + 1) {
      nums.splice(i, 1)
    } else if (num === i + 1) {
      // its already in the correct place
      i++
    } else {
      // swap to its correct position
      if (nums[num - 1] === undefined) {
        // out of range
        nums.splice(i, 1)
      } else if (nums[num - 1] === num) {
        nums.splice(i, 1)
      } else {
        const tmp = num
        nums[i] = nums[num - 1]
        nums[num - 1] = tmp
      }
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 !== nums[i]) {
      return i + 1
    }
  }
  return nums.length + 1
};