/**
 * @param {string} s
 * @return {string}
 */

// O(n^3) time limit exceed
const isPalindrome = (s) => {
  let isMirrored = true
  for (let i = 0; i < s.length / 2; i++) {
    const head = s[i]
    const tail = s[s.length - 1 - i]
    if (head !== tail) {
      isMirrored = false
    }
  }
  return isMirrored
}

const findPalindromeSubStringOfSize = (s, size) => {
  for (let i = 0; i < s.length - size + 1; i++) {
    const substring = s.slice(i, i + size)
    if (isPalindrome(substring)) {
      return substring
    }
  }
  return null
}

var longestPalindrome = function (s) {
  let answer = ''
  for (let size = 1; size <= s.length; size++) {
    const substring = findPalindromeSubStringOfSize(s, size)
    if (substring) {
      answer = substring
    }
  }
  return answer
};
