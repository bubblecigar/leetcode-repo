/**
 * @param {number[]} nums
 * @return {number}
 */

// time limit exceed
const recursive = (queue, nthJump = 0) => {
  const length = queue.length
  for (let i = 0; i < length; i++) {
    const jumpmap = queue.shift()
    if (jumpmap.length === 1) {
      // we reach the last index, jump finish
      return nthJump
    } else if (jumpmap.length === 0) {
      // jump over, abandon this map
    } else {
      const possibleJump = jumpmap[0]
      for (let j = 0; j < possibleJump; j++) {
        const newMap = jumpmap.slice(j + 1)
        queue.push(newMap)
      }
    }
  }
  return recursive(queue, nthJump + 1)
}

var jump = function (nums) {
  const answer = recursive([nums])
  return answer
};