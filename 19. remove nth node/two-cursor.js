/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let currentNode = head
  let leftNodeOfTargetNode = head
  for (let i = 0; i < n; i++) {
    currentNode = currentNode.next
  }
  const removeFirstNode = !currentNode
  if (removeFirstNode) { return head.next }

  let isEndNode = false
  while (!isEndNode) {
    isEndNode = currentNode.next === null

    if (isEndNode) {
      leftNodeOfTargetNode.next = leftNodeOfTargetNode.next.next
    } else {
      currentNode = currentNode.next
      leftNodeOfTargetNode = leftNodeOfTargetNode.next
    }
  }
  return head
};