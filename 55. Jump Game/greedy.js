/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  for (let i = 0; i < nums.length;) {
    const num = nums[i]
    if (i + num >= nums.length - 1) {
      return true
    }
    if (num === 0) {
      return false
    }
    let maxNextStep = 0
    let step = 0
    for (let j = 1; j <= num; j++) {
      if (j + nums[i + j] >= maxNextStep) {
        maxNextStep = j + nums[i + j]
        step = j
      }
    }
    i += step
  }
};