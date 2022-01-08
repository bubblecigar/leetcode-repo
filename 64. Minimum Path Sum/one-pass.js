/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function (grid) {
  const height = grid.length
  const width = grid[0].length

  for (let y = 0; y < height; y++) {
    for (let x = y === 0 ? 1 : 0; x < width; x++) {
      const upperNum = y > 0 ? grid[y - 1][x] : Infinity
      const leftNum = x > 0 ? grid[y][x - 1] : Infinity
      grid[y][x] += Math.min(upperNum, leftNum)
    }
  }
  return grid[height - 1][width - 1]
};