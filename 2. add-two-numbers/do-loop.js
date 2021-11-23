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

const checkExistUnProcessedDigit = (node1, node2) => !!(node1 || node2)

const addTwoNumbers = function (l1, l2) {
    const result = new ListNode(0)

    let currentResultNode = result
    let currentL1Node = l1
    let currentL2Node = l2

    let existUnProcessedDigit = true
    do {
        const sum = 0 +
            (currentResultNode ?.val || 0) +
            (currentL1Node ?.val || 0) +
            (currentL2Node ?.val || 0)
        const singleDigit = sum % 10
        const tenDigit = (sum - singleDigit) / 10

        currentResultNode.val = singleDigit

        currentL1Node = currentL1Node ?.next
        currentL2Node = currentL2Node ?.next
        existUnProcessedDigit = checkExistUnProcessedDigit(currentL1Node, currentL2Node)
        if (existUnProcessedDigit || tenDigit) {
            currentResultNode.next = new ListNode(tenDigit)
        }
        currentResultNode = currentResultNode.next
    } while (existUnProcessedDigit)

    return result
};