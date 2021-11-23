/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const bulletin = {}
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i]
    const someoneIsLookingForTheNumber = bulletin[number] !== undefined
    if (someoneIsLookingForTheNumber) {
      const hisIndex = bulletin[number]
      return [i, hisIndex]
    } else {
      const lookingFor = target - number
      bulletin[lookingFor] = i
    }
  }
};