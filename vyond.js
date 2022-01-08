function Node(val) {
  this.val = val
  this.left = null
  this.center = null
  this.right = null
}

const sum = (root) => {
  const queue = [root]
  let sum = 0
  while (queue.length) {
    const node = queue.shift()
    sum += node.val
    const left = node.left
    const center = node.center
    const right = node.right
    left && queue.push(left)
    center && queue.push(center)
    right && queue.push(right)
  }
  return sum
}

const sum = (root) => {
  if (root === null) {
    return 0
  }
  return root.val + sum(root.left) + sum(root.center) + sum(root.right)
}