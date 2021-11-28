/**
 * @param {number[]} height
 * @return {number}
 */

// brute force
var maxArea = function (height) {
  if (height.length < 2) {
    return 0
  }

  let maxArea = 0
  for (let leftWallIndex = 0; leftWallIndex < height.length - 1; leftWallIndex++) {
    const leftWallHeight = height[leftWallIndex]
    let minDistanceFromRightWall = Math.ceil(maxArea / leftWallHeight)
    for (let rightWallIndex = leftWallIndex + minDistanceFromRightWall; rightWallIndex < height.length;) {
      const rightWallHeight = height[rightWallIndex]
      const width = Math.abs(leftWallIndex - rightWallIndex)
      const minHeight = Math.min(leftWallHeight, rightWallHeight)
      const area = width * minHeight
      maxArea = Math.max(maxArea, area)
      if (area > maxArea) {
        newMinDistanceFromRightWall = Math.ceil(maxArea / leftWallHeight)
        if (newMinDistanceFromRightWall === minDistanceFromRightWall) {
          rightWallIndex++
        } else {
          rightWallIndex = newMinDistanceFromRightWall
        }
        maxArea = area
      } else {
        rightWallIndex++
      }
    }
  }

  return maxArea
};