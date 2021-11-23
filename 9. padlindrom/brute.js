/**
 * @param {number} x
 * @return {boolean}
 */

const numberToDigitArray = (number, result = []) => {
  if (number > 0) {
    const singleDigit = number % 10
    result.push(singleDigit)
    return numberToDigitArray((number - singleDigit) / 10, result)
  }
  return result
}

var isPalindrome = function (x) {
  if (x < 0) {
    return false
  } else {
    const digitArray = numberToDigitArray(x)
    let allDigitAreMirrored = true
    for (let i = 0; i < digitArray.length / 2; i++) {
      if (digitArray[i] !== digitArray[digitArray.length - 1 - i]) {
        allDigitAreMirrored = false
      }
    }
    return allDigitAreMirrored
  }
};