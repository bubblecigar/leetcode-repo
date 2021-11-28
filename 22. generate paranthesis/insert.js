/**
 * @param {number} n
 * @return {string[]}
 */

const insertParenthesAt = (string, index) => {
  const prefix = string.slice(0, index)
  const suffix = string.slice(index)
  const newString = prefix + '()' + suffix
  return newString
}

var generateParenthesis = function (n) {
  let stringSet = new Set()
  stringSet.add('()')

  for (let i = 0; i < n - 1; i++) {
    const newStringSet = new Set()
    stringSet.forEach(
      string => {
        for (let j = 0; j < string.length + 1; j++) {
          const newString = insertParenthesAt(string, j)
          newStringSet.add(newString)
        }
      }
    )
    stringSet = newStringSet
  }
  return [...stringSet]
};