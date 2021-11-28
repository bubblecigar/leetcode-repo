/**
 * @param {string} s
 * @return {boolean}
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