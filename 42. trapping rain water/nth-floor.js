/**
 * @param {number[]} height
 * @return {number}
 */

const findLeftWallIndex = (height) => {
  for (let i = 0; i < height.length; i++) {
    if (height[i] > 0) {
      return i
    }
  }
  return -1
}
const findRighttWallIndex = (height) => {
  for (let i = height.length - 1; i >= 0; i--) {
    if (height[i] > 0) {
      return i
    }
  }
  return -1
}
const calRainBetweenWallIndex = (height, leftWallIndex, rightWallIndex) => {
  let rainCatched = 0
  for (let i = leftWallIndex; i <= rightWallIndex; i++) {
    if (height[i] === 0) {
      rainCatched++
    }
  }
  return rainCatched
}
const sinkOneLevel = (height) => {
  for (let i = 0; i < height.length; i++) {
    height[i]--
    if (height[i] < 0) {
      height[i] = 0
    }
  }
}

var trap = function (height) {
  let totalRainCatched = 0
  const maxHeight = height.reduce((acc, cur) => cur > acc ? cur : acc, 0)
  for (let i = 0; i < maxHeight; i++) {
    const leftWallIndex = findLeftWallIndex(height)
    const rightWallIndex = findRighttWallIndex(height)
    const rainCatchedInThisFloor = calRainBetweenWallIndex(height, leftWallIndex, rightWallIndex)
    totalRainCatched += rainCatchedInThisFloor
    sinkOneLevel(height)
  }
  return totalRainCatched
};