/**
 * @param {string} s
 * @return {number}
 */

const updateNonRepeatedCharDictFromIndex = (s, start, charDict) => {
  delete charDict[s[start - 1]]
  let encounterRepeatChar = false
  let index = start + Object.keys(charDict).length
  while (!encounterRepeatChar && index < s.length) {
    const char = s[index]
    encounterRepeatChar = charDict[char]
    if (encounterRepeatChar) {
      return charDict
    } else {
      charDict[char] = true
    }
    index++
  }
}

var lengthOfLongestSubstring = function (s) {
  let answer = 0
  const charDict = {} // 30% less runtime for buffering chardict
  for (let i = 0; i < s.length; i++) {
    updateNonRepeatedCharDictFromIndex(s, i, charDict)
    const length = Object.keys(charDict).length
    if (length > answer) {
      answer = length
    }
  }
  return answer
};