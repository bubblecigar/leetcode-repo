/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const hasVisited = (_x, _y, visited) => visited.some(([y, x]) => y === _y && x === _x)

var exist = function (board, word) {
  const height = board.length
  const width = board[0].length
  let exist = false
  // at = [y, x]
  const rescursive = (at, remain, visited) => {
    const [y, x] = at
    const char = board[y][x]
    if (char === remain[0]) {
      // its valid, find all possible adjacent
      if (remain.length === 1) {
        exist = true
        return
      } else {
        if (x - 1 >= 0 && !hasVisited(x - 1, y, visited)) {
          rescursive([y, x - 1], remain.slice(1), [...visited, [y, x]])
        }
        if (x + 1 < width && !hasVisited(x + 1, y, visited)) {
          rescursive([y, x + 1], remain.slice(1), [...visited, [y, x]])
        }
        if (y - 1 >= 0 && !hasVisited(x, y - 1, visited)) {
          rescursive([y - 1, x], remain.slice(1), [...visited, [y, x]])
        }
        if (y + 1 < height && !hasVisited(x, y + 1, visited)) {
          return rescursive([y + 1, x], remain.slice(1), [...visited, [y, x]])
        }
      }
    } else {
      // its invalid, discard
    }
  }
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      rescursive([y, x], word, [])
    }
  }
  return exist
};