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

var longestPalindrome = function (s) {
  let answer = ''
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const substring = s.slice(i, j + 1)
      if (isPalindrome(substring) && substring.length > answer.length) {
        answer = substring
      }
    }
  }
  return answer
};