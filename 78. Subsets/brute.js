/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const recursive = (queue, result = []) => {
  const queueLength = queue.length
  const nextQueue = []
  for (let i = 0; i < queueLength; i++) {
    const [elements, set] = queue.shift()
    const element = elements.shift()
    const possible1 = [[...elements], [...set]]
    const possible2 = [[...elements], [...set, element]]
    if (elements.length === 0) {
      result.push(possible1[1])
      result.push(possible2[1])
    } else {
      nextQueue.push(possible1)
      nextQueue.push(possible2)
    }
  }
  if (nextQueue.length) {
    return recursive(nextQueue, result)
  } else {
    return result
  }
}

var subsets = function (nums) {
  const result = recursive([[nums, []]])
  return result
};