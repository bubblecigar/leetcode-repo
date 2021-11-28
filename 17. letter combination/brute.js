/**
 * @param {string} digits
 * @return {string[]}
 */

const digitCharMap = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"]
}

var letterCombinations = function (digits) {
  let result = []
  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i]
    const possibleChars = digitCharMap[digit]
    const combinations = []
    if (result.length === 0) {
      combinations.push(...possibleChars)
    } else {
      result.forEach(
        string => {
          combinations.push(...possibleChars.map(char => string + char))
        }
      )
    }
    result = combinations
  }

  return result
};