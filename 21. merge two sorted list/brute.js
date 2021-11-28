/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


var mergeTwoLists = function (list1, list2) {
  if (list1 === null) { return list2 }
  if (list2 === null) { return list1 }

  let node1 = list1
  let node2 = list2
  const dummyHead = new ListNode()
  let currentNode = dummyHead

  while (node1 && node2) {
    if (node1.val > node2.val) {
      currentNode.next = node2
      currentNode = currentNode.next
      node2 = node2.next
    } else {
      currentNode.next = node1
      currentNode = currentNode.next
      node1 = node1.next
    }
  }

  if (node1) {
    currentNode.next = node1
  } else if (node2) {
    currentNode.next = node2
  }

  return dummyHead.next
};