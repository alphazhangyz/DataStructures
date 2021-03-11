/**
 * 二叉搜索树
 */

/**
 * 树的节点
 * key    节点值
 * left   左侧节点的引用
 * right  右侧节点的引用
 */
class Node {
  constructor (key) {
    this.key = key
    this.left = null
    this.right = null
  }
}


class BinarySearchTree {
  constructor (compareFn = defaultCompare) {
    this.root = null
    this.compareFn = compareFn
  }


  
}

function defaultCompare (a, b) {
  if (a === b) return 0
  return a > b ? 1 : -1
}