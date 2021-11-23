/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// nums: [3, 1, 3]
// {
//  1: [1]
//  3: [0, 2] 
// }
const createNumsIndexTable = nums => nums.reduce(
  (acc, cur, i) => {
    if (acc[cur]) {
      acc[cur].push(i)
    } else {
      acc[cur] = [i]
    }
    return acc
  }, {}
)

var twoSum = function (nums, target) {
  const numsIndexTable = createNumsIndexTable(nums)
  let answer
  nums.find(
    (number, i) => {
      const partnerNumber = target - number
      const possibleIndexes = numsIndexTable[partnerNumber] || []
      const partnerIndex = possibleIndexes.find(index => index !== i)
      const partnerExist = partnerIndex !== undefined
      if (partnerExist) {
        answer = [i, partnerIndex]
      }
      return partnerExist
    }
  )
  return answer
};