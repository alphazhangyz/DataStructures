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
    // 判断是否有根节点
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  insertNode (node, key) {
    // 判断新插入的key和现有节点node的key的大小
    if (node.key > key) {
      // 只能插入到node的左侧
      if (node.left == null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      // 只能插入到node的右侧
      if (node.right == null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
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

module.exports = {
  BinarySearchTree
}