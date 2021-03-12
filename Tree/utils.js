const { BinarySearchTree } = require('./binarySearchTree')


// 依次插入节点： 10 6 18 3 1 7 11 4 15 5 13 22
const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(6)
bst.insert(18)
bst.insert(3)
bst.insert(1)
bst.insert(7)
bst.insert(11)
bst.insert(4)
bst.insert(15)
bst.insert(5)
bst.insert(13)
bst.insert(22)

console.log(bst.min())
console.log(bst.max())