/**
 * @param {number} n
 * @return {number}
 */


const recuresive = (queue, combinations = 0) => {
  const queueLength = queue.length
  for (let i = 0; i < queueLength; i++) {
    const remainSteps = queue.shift()
    if (remainSteps === 0) {
      // we reach the top
      combinations++
    }
    if (remainSteps - 1 >= 0) {
      // move 1 step
      queue.push(remainSteps - 1)
    }
    if (remainSteps - 2 >= 0) {
      // move 2 step
      queue.push(remainSteps - 2)
    }
  }
  if (queue.length === 0) {
    return combinations
  } else {
    return recuresive(queue, combinations)
  }

}

var climbStairs = function (n) {
  const combinations = recuresive([n])
  return combinations
};