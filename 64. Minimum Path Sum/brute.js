/**
 * @param {number[][]} grid
 * @return {number}
 */

// queue [y, x, acc]
const recursive = (grid, queue, result = Infinity) => {
  const queueLength = queue.length
  const height = grid.length
  const width = grid[0].length
  for (let i = 0; i < queueLength; i++) {
    const [y, x, acc] = queue.shift()
    if (y === height - 1 && x === width - 1) {
      if (acc < result) {
        result = acc
      }
    }
    // go bottom
    if (y + 1 < height) {
      queue.push([y + 1, x, acc + grid[y + 1][x]])
    }
    // go right
    if (x + 1 < width) {
      queue.push([y, x + 1, acc + grid[y][x + 1]])
    }
  }
  if (queue.length === 0) {
    return result
  } else {
    return recursive(grid, queue, result)
  }
}

var minPathSum = function (grid) {
  const result = recursive(grid, [[0, 0, grid[0][0]]])
  return result
};