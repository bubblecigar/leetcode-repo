/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// brute force
// queue:  candidatesDistribution: [] // ex: init as [0,0,0,0] 
const recursionFunction = (candidates, target, queue, result = []) => {
  const length = queue.length
  for (let i = 0; i < length; i++) {
    const distribution = queue.shift()
    const total = distribution.reduce(
      (acc, cur, i) => acc += candidates[i] * cur, 0
    )
    const remain = target - total
    if (remain === 0) {
      result.push(distribution)
    } else {
      const possibleDistributions = []
      candidates.forEach(
        (number, i) => {
          if (number <= remain) {
            const newDistribution = [...distribution]
            newDistribution[i]++
            possibleDistributions.push(newDistribution)
          }
        }
      )
      queue.push(...possibleDistributions)
    }

  }
  if (queue.length > 0) {
    return recursionFunction(candidates, target, queue, result)
  } else {
    return result
  }
}

var combinationSum = function (candidates, target) {
  const distributions = recursionFunction(candidates, target, [new Array(candidates.length).fill(0)])
  const set = new Set(distributions.map(ar => JSON.stringify(ar)))
  const answers = []
  for (let item of set) {
    const uniqueDistribution = JSON.parse(item)
    const answer = uniqueDistribution.reduce(
      (acc, cur, i) => {
        acc.push(...new Array(cur).fill(candidates[i]))
        return acc
      }, []
    )
    if (answer.length > 0) {
      answers.push(answer)
    }
  }
  return answers
};