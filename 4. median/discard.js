/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const discardSmallerHead = (nums1, nums2, targetIndex) => {
  if (nums1.length === 0 || nums2.length === 0 || targetIndex <= 1) {
    return targetIndex
  }

  const discardAmount = Math.floor(targetIndex / 2)
  const header1 = nums1[discardAmount - 1] || nums1[nums1.length - 1]
  const header2 = nums2[discardAmount - 1] || nums2[nums2.length - 1]
  // since total discardAmount <= targetIndex
  // it's impossible to find target in the head with smaller header
  // we can safely assume the head with smaller header is on the left hand side of the target
  // we trim it out from nums and update the targetIndex

  let newTargetIndex
  if (header1 > header2) {
    const removedElements = nums2.splice(0, discardAmount)
    newTargetIndex = targetIndex - removedElements.length
  } else {
    const removedElements = nums1.splice(0, discardAmount)
    newTargetIndex = targetIndex - removedElements.length
  }

  return discardSmallerHead(nums1, nums2, newTargetIndex)
}

const recursivelyDiscardSmallerHead = (nums1, nums2, targetIndex) => {
  return discardSmallerHead(nums1, nums2, targetIndex)
}

const findMedianSortedArrays = function (nums1, nums2) {
  const total = nums1.length + nums2.length
  const isEven = total % 2 === 0
  const firstMedianIndex = isEven ? total / 2 - 1 : (total - 1) / 2

  const remainedIndex = recursivelyDiscardSmallerHead(nums1, nums2, firstMedianIndex)
  // The recursive function remove half of remainedIndex from nums1 or nums2 in each step, for example:
  //  remove 8 elements -> remove 4 elements -> remove 2 elements -> ...
  // The recursion function stop if:
  //  1. any of the array being emptied, so we can get the median immediately from the other array
  //  2. remainedIndex <= 1

  let sortedArray
  if (nums1.length === 0) {
    sortedArray = nums2
  } else if (nums2.length === 0) {
    sortedArray = nums1
  } else {
    // remainedIndex is 1 or 0, sort should be fine here
    sortedArray = [...nums1.slice(0, remainedIndex + 2), ...nums2.slice(0, remainedIndex + 2)].sort((a, b) => a - b)
  }

  if (isEven) {
    const firstMedian = sortedArray[remainedIndex]
    const secondMedian = sortedArray[remainedIndex + 1]
    return (firstMedian + secondMedian) / 2
  } else {
    const firstMedian = sortedArray[remainedIndex]
    return firstMedian
  }
};