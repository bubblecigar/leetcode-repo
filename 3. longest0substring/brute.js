/**
 * @param {string} s
 * @return {number}
 */

const findLongestSubstringLengthFromIndex = (s, start) => {
  const charDict = {}
  let encounterRepeatChar = false
  let index = start
  while (!encounterRepeatChar && index < s.length) {
    const char = s[index]
    encounterRepeatChar = charDict[char]
    if (encounterRepeatChar) {
      return Object.keys(charDict).length
    } else {
      charDict[char] = true
    }
    index++
  }
  return Object.keys(charDict).length
}

var lengthOfLongestSubstring = function (s) {
  let answer = 0
  for (let i = 0; i < s.length; i++) {
    const length = findLongestSubstringLengthFromIndex(s, i)
    if (length > answer) {
      answer = length
    }
  }
  return answer
};