/**
 * @param {number[]} heights
 * @return {number}
 */

var largestRectangleArea = function (heights) {

  let maxArea = 0

  const sink = (heightsArray, n) => {
    // console.log('heightsArray', heightsArray)
    const newHeightsArray = []
    for (let i = 0; i < heightsArray.length; i++) {
      const heights = heightsArray[i]
      // sink by 1 unit, split if a value drop below 0
      const sinked = heights.map(h => h - 1)
      // console.log('sinked', sinked)
      const splitted = []
      let acc = []
      while (sinked.length > 0) {
        const val = sinked.shift()
        if (val >= 0) {
          acc.push(val)
        } else {
          if (acc.length) {
            splitted.push(acc)
          }
          acc = []
        }
      }
      if (acc.length > 0) {
        splitted.push(acc)
      }
      // calc max area of height n
      // console.log('splitted', splitted)
      splitted.forEach(
        heights => {
          const area = heights.length * n
          maxArea = Math.max(maxArea, area)
        }
      )
      newHeightsArray.push(...splitted)
    }
    // console.log('newHeightsArray', newHeightsArray)
    if (newHeightsArray.length) {
      sink(newHeightsArray, n + 1)
    }
  }

  sink([heights], 1)

  return maxArea
};