/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// brute force
var findMedianSortedArrays = function (nums1, nums2) {
  const total = (nums1.length + nums2.length)
  const isEven = total % 2 === 0
  const medianIndexes = isEven ? [total / 2 - 1, total / 2] : [(total - 1) / 2]

  let index1 = 0
  let index2 = 0
  const mergedArray = []
  while (index1 < nums1.length || index2 < nums2.length) {
    let num1 = nums1[index1]
    let num2 = nums2[index2]
    if (num1 === undefined) num1 = Infinity
    if (num2 === undefined) num2 = Infinity
    if (num1 < num2) {
      mergedArray.push(num1)
      index1++
    } else {
      mergedArray.push(num2)
      index2++
    }
  }
  const medianNumbersSum = medianIndexes.reduce(
    (acc, cur) => acc + mergedArray[cur], 0
  )
  return medianNumbersSum / medianIndexes.length
};