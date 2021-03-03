const { Linked, Node } = require('./linked')

class DoubleNode extends Node {
  constructor (element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}

/**
 * 双向链表
 */
class DoubleLinked extends Linked {
  constructor () {
    super()
    this.tail = undefined     // 链表最后一个元素的引用
  }

  // 在任意位置插入一个元素
  insert (element, index) {
    if (index < 0 || this.count > index) return false
    
    const node = new DoubleNode(element)
    let current = this.head
    if (index === 0) {
      // 头部插入
      
      // 原本没有
      if (this.head == null) {
        this.head = node
        this.tail = node
      } else {
        node.next = this.head
        current.prev = node
        this.head = node
      }

    } else if (this.count === index) {
      // 直接在尾部插入
      current = this.tail
      current.next = node
      node.prev = current
      this.tail = node
    } else {
      const previous = this.getElementAt(index - 1)
      current = previous.next
      node.next = current
      previous.next = node
      current.prev = node
      node.prev = previous
    }
    return true
  }

  // 任意位置移除
  removeAt(index) {
    if (index < 0 || index >= this.count) return undefined
    
    let current = this.head
    if (index === 0) {
      this.head = current.next
      if (this.count === 1) {
        this.tail = undefined
      } else {
        this.head.prev = undefined
      }
    } else if (index === this.count - 1) {   // 移除最后一项
      current = this.tail
      this.tail = current.prev
      this.tail.next = undefined
    } else {
      current = this.getElementAt(index)
      const previous = current.prev
      previous.next = current.next
      current.next.prev = previous
    }
    this.count--
    return current.element

  }
}

module.exports = {
  DoubleLinked
}