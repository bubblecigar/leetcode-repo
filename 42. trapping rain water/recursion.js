/**
 * @param {number[]} height
 * @return {number}
 */


const recursive = (height, result) => {
  if (height.reduce((acc, cur) => acc + cur, 0) === 0) {
    return result
  }
  let leftWallIndex = -1
  let rightWallIndex = -1
  for (let i = 0; i < height.length; i++) {
    if (height[i] > 0) {
      leftWallIndex = i
      break
    }
  }
  for (let i = height.length - 1; i >= 0; i--) {
    if (height[i] > 0) {
      rightWallIndex = i
      break
    }
  }
  if (leftWallIndex >= rightWallIndex) {
    // no rain collected
    const nextLevel = height.map(h => (h - 1) <= 0 ? 0 : h - 1)
    return recursive(nextLevel, result)
  } else {
    let rainInThisLevel = 0
    for (let i = leftWallIndex; i <= rightWallIndex; i++) {
      if (height[i] === 0) {
        rainInThisLevel++
      }
    }
    const nextLevel = height.map(h => (h - 1) <= 0 ? 0 : h - 1)
    return recursive(nextLevel, result + rainInThisLevel)
  }

}

var trap = function (height) {
  const result = recursive(height, 0)
  return result
};