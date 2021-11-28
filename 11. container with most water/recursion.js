/**
 * @param {number[]} height
 * @return {number}
 */


const removeMinWall = (height, maxArea = 0) => {
  if (height.length < 2) {
    return maxArea
  }
  const head = height[0]
  const tail = height[height.length - 1]
  const width = height.length - 1
  const shorterWallIndex = head < tail ? 0 : height.length - 1
  const maxAreaOfShorterWall = height[shorterWallIndex] * width
  const newMaxArea = Math.max(maxArea, maxAreaOfShorterWall)
  height.splice(shorterWallIndex, 1)
  return removeMinWall(height, newMaxArea)
}

// brute force
var maxArea = function (height) {
  return removeMinWall(height)
};