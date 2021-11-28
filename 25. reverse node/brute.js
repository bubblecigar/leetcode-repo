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

  const groups = [] // { head, tail }
  let leftList = null
  let rightList = head
  while (rightList) {
    const needReverse = checkEnoughNode(rightList, k)
    if (needReverse) {
      let tail = null
      for (let i = 0; i < k; i++) {
        let rightNode = rightList
        if (!tail) { tail = rightNode }
        rightList = rightList.next
        rightNode.next = leftList
        leftList = rightNode
      }
      groups.push({ head: leftList, tail })
      leftList = null
    } else {
      groups.push({ head: rightList })
      rightList = null
    }
  }
  console.log(groups)
  for (let i = 0; i < groups.length - 1; i++) {
    groups[i].tail.next = groups[i + 1].head
  }
  return groups[0].head
};