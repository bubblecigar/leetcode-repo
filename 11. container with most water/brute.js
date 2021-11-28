/**
 * @param {number[]} height
 * @return {number}
 */

// brute force
// time out
const getMaxAreaOfIndex = (height, index) => {
  let maxArea = 0
  const height1 = height[index]
  for (let i = 0; i < height.length; i++) {
    const height2 = height[i]
    const width = Math.abs(index - i)
    const minHeight = Math.min(height1, height2)
    const area = width * minHeight
    maxArea = Math.max(maxArea, area)
  }
  return maxArea
}

var maxArea = function (height) {
  if (height.length < 2) {
    return 0
  }

  let maxArea = 0
  for (let i = 0; i < height.length; i++) {
    const maxAreaOfIndex = getMaxAreaOfIndex(height, i)
    maxArea = Math.max(maxArea, maxAreaOfIndex)
  }

  return maxArea
};