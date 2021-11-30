/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function (grid) {
  const height = grid.length
  const width = grid[0].length
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const upperNum = grid[y - 1] ? grid[y - 1][x] : Infinity
      const leftNum = typeof grid[y][x - 1] === 'number' ? grid[y][x - 1] : Infinity
      if (x === 0 && y === 0) {
        // init point
      } else {
        grid[y][x] += Math.min(upperNum, leftNum)
      }
    }
  }
  return grid[height - 1][width - 1]
};