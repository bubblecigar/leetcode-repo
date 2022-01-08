/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

  const anagrams = {}

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i]
    const sortedStr = str.split('').sort().join('')
    if (!anagrams[sortedStr]) {
      anagrams[sortedStr] = [str]
    } else {
      anagrams[sortedStr].push(str)
    }
  }

  return Object.keys(anagrams).map(key => anagrams[key])
};