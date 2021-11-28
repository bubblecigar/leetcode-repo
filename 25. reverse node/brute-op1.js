/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const checkEnoughNode = (node, k) => {
  let currentNode = node
  for (let i = 0; i < k - 1; i++) {
    if (currentNode.next) {
      currentNode = currentNode.next
    } else {
      return false
    }
  }
  return true
}

var reverseKGroup = function (head, k) {
  if (k <= 1) { return head }

  let leftList = null
  let rightList = head
  let answerHead
  let answerTail
  while (rightList) {
    const needReverse = checkEnoughNode(rightList, k)
    if (needReverse) {
      const tail = rightList
      for (let i = 0; i < k; i++) {
        let rightNode = rightList
        rightList = rightList.next
        rightNode.next = leftList
        leftList = rightNode
      }
      if (!answerHead && !answerTail) {
        answerHead = leftList
        answerTail = tail
      } else {
        answerTail.next = leftList
        answerTail = tail
      }
      leftList = null
    } else {
      answerTail.next = rightList
      rightList = null
    }
  }
  return answerHead
};