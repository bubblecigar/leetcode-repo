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

  const reverseList = [] // { head, tail }
  let n1 = head
  let n2 = head.next
  let n3 = head.next.next
  if (!n3) {
    n2.next = n1
    return n2
  }
  while (n3) {
    const needReverse = checkEnoughNode(n1, k)
    const tail = n1
    if (needReverse) {
      n1.next = null
      for (let i = 0; i < k - 1; i++) {
        n2.next = n1
        n1 = n2
        n2 = n3
        n3 = n3 ?.next
            }
      const head = n2
      reverseList.push({ head, tail })
    } else {
      reverseList.push({ head: tail })
      break
    }
  }
  console.log(reverseList)
  for (let i = 0; i < reverseList.length - 1; i++) {
    reverseList[i].tail.next = reverseList[i + 1].head
  }
  return reverseList[0].head
};