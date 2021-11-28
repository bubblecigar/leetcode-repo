/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */



var nextPermutation = function (nums) {
  if (nums.length <= 1) { return nums }

  for (let i = nums.length - 2; i >= 0; i--) {
    const ithNumber = nums[i]
    const tailNumber = nums[nums.length - 1]
    if (ithNumber >= tailNumber) {
      // next permutation do not occurs at i
      nums.splice(i, 1)
      nums.push(ithNumber)
    } else {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] > ithNumber) {
          const biggerNumber = nums[j]
          nums[j] = ithNumber
          nums[i] = biggerNumber
          break
        }
      }
      break
    }
  }
};