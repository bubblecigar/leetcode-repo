/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  if (matrix.length < 2) { return matrix }

  const isEven = matrix.length % 2 === 0
  const level = isEven ? matrix.length / 2 : (matrix.length - 1) / 2
  for (let y = 0; y < level; y++) {
    const edgeLength = matrix.length - 1 - y * 2
    for (let x = 0; x < edgeLength; x++) {
      const [tx, ty] = [x + y, y]
      const dx = edgeLength - x
      const dy = x

      const [rx, ry] = [tx + dx, ty + dy]
      const [bx, by] = [rx - dy, ry + dx]
      const [lx, ly] = [bx - dx, by - dy]

      const top_number = matrix[ty][tx]
      const right_number = matrix[ry][rx]
      const bottom_number = matrix[by][bx]
      const left_number = matrix[ly][lx]

      matrix[ty][tx] = left_number
      matrix[ry][rx] = top_number
      matrix[by][bx] = right_number
      matrix[ly][lx] = bottom_number
    }
  }
  return matrix
};