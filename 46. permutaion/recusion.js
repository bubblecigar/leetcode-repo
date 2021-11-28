/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// brute force
const recursionFunction = (queue, answers = []) => {
  const length = queue.length
  for (let i = 0; i < length; i++) {
    const [pool, result] = queue.shift()
    for (let j = 0; j < pool.length; j++) {
      const newResult = [...result, pool[j]]
      const newPool = [...pool]
      newPool.splice(j, 1)
      if (newPool.length === 0) {
        answers.push(newResult)
      } else {
        queue.push([newPool, newResult])
      }
    }
  }
  if (queue.length > 0) {
    return recursionFunction(queue, answers)
  } else {
    return answers
  }
}

var permute = function (nums) {
  if (nums.length < 2) {
    return [nums]
  }
  const pool = nums
  const result = []
  const queue = [[pool, result]]
  const answers = recursionFunction(queue)
  return answers
};