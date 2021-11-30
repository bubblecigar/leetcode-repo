/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let answer = -Infinity
  let accumulator = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    accumulator += num
    answer = Math.max(answer, accumulator)
    if (accumulator < 0) {
      accumulator = 0
    }
  }
  return answer
};