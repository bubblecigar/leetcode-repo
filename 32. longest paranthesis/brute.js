/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const stringLength = s.length
  if (stringLength < 2) {
    return 0
  }

  const invalidCharIndexRecord = []
  for (let i = 0; i < s.length; i++) {
    invalidCharIndexRecord.push(i)
  }

  // delete () and update the index invalidCharIndexRecord until all innerMostParenthesis has been deleted
  let hasInnerMostParenthesis
  do {
    hasInnerMostParenthesis = false
    if (s.length >= 2) {
      for (let i = 0; i < s.length - 1; i++) {
        const left = s[i]
        const right = s[i + 1]
        const matched = left === '(' && right === ')'
        if (matched) {
          s = s.slice(0, i) + s.slice(i + 2)
          invalidCharIndexRecord.splice(i, 2)
          hasInnerMostParenthesis = true
        }
      }
    }
  } while (hasInnerMostParenthesis)

  let answer = 0
  invalidCharIndexRecord.unshift(-1)
  invalidCharIndexRecord.push(stringLength)
  for (let i = 0; i < invalidCharIndexRecord.length; i++) {
    const leftIndex = invalidCharIndexRecord[i]
    const rightIndex = invalidCharIndexRecord[i + 1]
    const length = rightIndex - leftIndex - 1
    if (length >= 2) {
      answer = Math.max(answer, length)
    }
  }

  return answer
};