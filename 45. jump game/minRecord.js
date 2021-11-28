/**
 * @param {number[]} nums
 * @return {number}
 */


var jump = function (nums) {
  const minJumpRecord = new Array(nums.length).fill(Infinity)
  minJumpRecord[0] = 0

  for (let i = 0; i < nums.length; i++) {
    const possibleJump = nums[i]
    const minJumpToCurrentIndex = minJumpRecord[i]
    for (let j = 0; j <= possibleJump; j++) {
      const targetIndex = i + j
      const minJumpToTarget = minJumpRecord[targetIndex]
      const jumpToTargetFromI = minJumpToCurrentIndex + 1
      if (minJumpToTarget !== undefined && jumpToTargetFromI < minJumpToTarget) {
        minJumpRecord[targetIndex] = jumpToTargetFromI
      }
    }
  }
  return minJumpRecord[nums.length - 1]
};