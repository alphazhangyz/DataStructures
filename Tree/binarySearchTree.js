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

  // 向树中插入一个新的键
  insert (key) {

  }

  // 在树中查找一个键
  search (key) {

  }

  // 中序遍历方式遍历所有节点
  inOrderTraverse () {

  }

  // 先序遍历方式遍历所有节点
  preOrderTraverse () {

  }

  // 后序遍历方式遍历所有节点
  postOrderTraverse () {

  }

  // 返回树中最小的值/键
  min () {

  }

  // 返回树中最大的值/键
  max () {

  }

  // 从树中移除某个键
  remove (key) {
    
  }


  
}

function defaultCompare (a, b) {
  if (a === b) return 0
  return a > b ? 1 : -1
}