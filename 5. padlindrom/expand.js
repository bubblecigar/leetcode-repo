/**
 * @param {string} s
 * @return {string}
 */

// O(n^2)
// assume s[leftCursor] to s[rightCursor] is a palindrome
const expandPalindrome = (s, leftCursor, rightCursor) => {
  const nextLeftCursor = leftCursor - 1
  const nextRightCursor = rightCursor + 1
  const nextLeadingChar = s[nextLeftCursor]
  const nextEndingChar = s[nextRightCursor]
  const outOfBound = nextLeadingChar === undefined || nextEndingChar === undefined
  const isMirrored = nextLeadingChar === nextEndingChar
  if (outOfBound || !isMirrored) {
    return s.slice(leftCursor, rightCursor + 1)
  } else {
    return expandPalindrome(s, nextLeftCursor, nextRightCursor)
  }
}

const getLongestOddPalindromeFromCenter = (s, center) => {
  return expandPalindrome(s, center, center)
}

const getLongestEvenPalindromeFromCenter = (s, leftCenter) => {
  if (s[leftCenter] === s[leftCenter + 1]) {
    return expandPalindrome(s, leftCenter, leftCenter + 1)
  } else {
    return ''
  }
}

var longestPalindrome = function (s) {
  if (s.length === 0) { return '' }

  let answer = ''
  for (let i = 0; i < s.length; i++) {
    const oddSubstring = getLongestOddPalindromeFromCenter(s, i)
    if (oddSubstring.length > answer.length) {
      answer = oddSubstring
    }
    const evenSubstring = getLongestEvenPalindromeFromCenter(s, i)
    if (evenSubstring.length > answer.length) {
      answer = evenSubstring
    }
  }
  return answer
};