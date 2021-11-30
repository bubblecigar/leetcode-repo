/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort(
    (a, b) => a[0] - b[0]
  )
  const results = []
  for (let i = 0; i < intervals.length; i++) {
    if (i >= intervals.length - 1) {
      // this is the last interval, thus its the non-overlapping interval
      results.push(intervals[i])
    } else {
      const [start1, end1] = intervals[i]
      const [start2, end2] = intervals[i + 1]
      if (start2 <= end1) {
        // they should be merged
        intervals[i + 1] = [start1, Math.max(end1, end2)]
      } else {
        results.push([start1, end1])
      }
    }
  }
  return results
};