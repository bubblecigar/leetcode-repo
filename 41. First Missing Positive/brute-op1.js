/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let end = nums.length - 1
  for (let i = 0; i < end;) {
    const num = nums[i]
    if (num === i + 1) {
      // its already in the correct place
      i++
    } else if (num <= 0 || end < num || nums[num - 1] === num) {
      // swap to end
      const tmp = nums[end]
      nums[end] = num
      nums[i] = tmp
      end--
    } else {
      const tmp = num
      nums[i] = nums[num - 1]
      nums[num - 1] = tmp
    }
  }
  return end
};