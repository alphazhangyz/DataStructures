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
    return this.searchNode(this.root, key)
  }

  searchNode (node, key) {
    if (node == null) return false
    if (node.key > key) {
      // 节点左侧
      return this.searchNode(node.left, key)
    } else if (node.key < key) {
      // 节点右侧
      return this.searchNode(node.right, key)
    } else {
      // 找到了节点
      return true
    }
  }

  // 中序遍历方式遍历所有节点
  inOrderTraverse (handler) {

  }

  inOrderTraverseNode (node, handler) {

  }

  // 先序遍历方式遍历所有节点
  preOrderTraverse () {

  }

  // 后序遍历方式遍历所有节点
  postOrderTraverse () {

  }

  // 返回树中最小的值/键
  min () {
    return this.getMinNode(this.root)
  }

  getMinNode (node) {
    let current = node
    while (current != null && current.left != null) {
      current = current.left
    }
    return current
  }

  // 返回树中最大的值/键
  max () {
    return this.getMaxNode(this.root)
  }

  getMaxNode (node) {
    let current = node
    while (current != null && current.right != null) {
      current = current.right
    }
    return current
  }

  // 从树中移除某个键
  remove (key) {
    // 移除的节点是叶子节点

    // 移除的节点之后一个子节点

    // 移除的节点有2个子节点
  }


  
}

function defaultCompare (a, b) {
  if (a === b) return 0
  return a > b ? 1 : -1
}

module.exports = {
  BinarySearchTree
}