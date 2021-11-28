/**
 * @param {number} n
 * @return {string[]}
 */


const matchParenthes = {
  '()': true,
  '[]': true,
  '{}': true
}
const parenthesDirection = {
  '(': 'right',
  '[': 'right',
  '{': 'right',
  ')': 'left',
  ']': 'left',
  '}': 'left'
}

var isValid = function (s) {
  if (s.length < 2) { return false }

  const stack = []
  for (let i = 0; i < s.length; i++) {
    const parenthes = s[i]
    const direction = parenthesDirection[parenthes]

    if (direction === 'right') {
      stack.push(parenthes)
    } else {
      const prevParenthes = stack[stack.length - 1]
      if (!prevParenthes) {
        return false
      }
      const isMatch = matchParenthes[prevParenthes + parenthes]
      if (isMatch) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
};

var generateParenthesis = function (n) {
  // brute force
  let result = []
  for (let i = 0; i < n * 2; i++) {
    const combinations = ['(', ')']
    if (result.length === 0) {
      result = combinations
    } else {
      result = result.map(
        string => {
          return combinations.map(
            char => string + char
          )
        }
      ).flat()
    }
  }
  result = result.filter(
    string => isValid(string)
  )
  return result
};