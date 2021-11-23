/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const bruteForce = (nums, target) => {
  const summationTable = {}
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const summation = nums[i] + nums[j]
      summationTable[summation] = [i, j]
    }
  }
  return summationTable[target]
}

var twoSum = function (nums, target) {
  return bruteForce(nums, target)
};