/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let rightWindowIndex = -1
  let leftWindowIndex = 0
  const charCountsWithinWindow = {}
  let maxLength = 0
  while (rightWindowIndex < s.length) {
    const existRepeatCharInWindow = Object.keys(charCountsWithinWindow).some(
      char => charCountsWithinWindow[char] > 1
    )

    if (existRepeatCharInWindow) {
      leftWindowIndex++
      const removedChar = s[leftWindowIndex - 1]
      charCountsWithinWindow[removedChar]--
    } else {
      const windowSize = rightWindowIndex - leftWindowIndex + 1
      maxLength = Math.max(maxLength, windowSize)

      rightWindowIndex++
      const newlyIncludedChar = s[rightWindowIndex]
      const charCounts = charCountsWithinWindow[newlyIncludedChar]
      if (charCounts === undefined) {
        charCountsWithinWindow[newlyIncludedChar] = 1
      } else {
        charCountsWithinWindow[newlyIncludedChar]++
      }
    }
  }
  return maxLength
};