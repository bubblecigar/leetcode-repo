/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

const isValid = charTable => Object.keys(charTable).every(key => charTable[key] <= 0)

var minWindow = function (s, t) {
  if (s.length <= 1) {
    return s === t ? s : ''
  }
  if (t.length === 0) {
    return ''
  }
  if (t.length === 1) {
    return s.includes(t) ? t : ''
  }

  const charTable = {}
  for (let i = 0; i < t.length; i++) {
    const char = t[i]
    if (charTable[char] === undefined) {
      charTable[char] = 1
    } else {
      charTable[char]++
    }
  }
  let leftIndex = -1
  let rightIndex = -1
  let currentString = ''
  let shortestString = ''
  let mode = 'extend' // || 'shrink'
  while (rightIndex < s.length && leftIndex < s.length) {
    if (mode === 'extend') {
      // extend till its valid
      while (!isValid(charTable) && rightIndex < s.length) {
        rightIndex++
        const charToInclude = s[rightIndex]
        currentString += charToInclude
        if (charTable[charToInclude] !== undefined) {
          charTable[charToInclude]--
        }
      }
      mode = 'shrink'
    } else if (mode === 'shrink' && leftIndex < s.length) {
      // shrink till its invalid
      while (isValid(charTable)) {
        if (shortestString === '' || currentString.length < shortestString.length) {
          shortestString = currentString
        }
        leftIndex++
        const charToRemove = s[leftIndex]
        currentString = currentString.slice(1)
        if (charTable[charToRemove] !== undefined) {
          charTable[charToRemove]++
        }
      }
      mode = 'extend'
    }
  }
  return shortestString
};