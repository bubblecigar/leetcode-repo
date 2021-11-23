// https://leetcode.com/problems/add-two-numbers/submissions/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const sumHeadDigit = (l1, l2, result) => {
  const sum = result.val + (l1 ?.val || 0) + (l2 ?.val || 0)
  const singleDigit = sum % 10
  const tenDigit = (sum - singleDigit) / 10

  result.val = singleDigit

  const l1End = !(l1 && l1.next)
  const l2End = !(l2 && l2.next)
  const existUnprocessedDigit = !l1End || !l2End
  if (existUnprocessedDigit || tenDigit) {
    result.next = new ListNode(tenDigit)
  }
  if (existUnprocessedDigit) {
    const nextNode1 = l1 ?.next
      const nextNode2 = l2 ?.next
      result.next = new ListNode(tenDigit)
    return sumHeadDigit(nextNode1, nextNode2, result.next)
  }
}

const revusivelySumHeadDigit = (l1, l2) => {
  const result = new ListNode(0)
  sumHeadDigit(l1, l2, result)
  return result
}

var addTwoNumbers = function (l1, l2) {
  return revusivelySumHeadDigit(l1, l2)
};