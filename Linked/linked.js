/**
 * 链表
 */

class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class Linked {
  constructor () {
    this.head = null
    this.count = 0 
  }

  // push 向链表尾部添加一个元素
  push (element) {
    const node = new Node(element)
    let current
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  // insert 向链表的特定位置插入一个新元素
  insert (element, index) {
    // 插入元素边界位置判断
    if (index < 0 || index > this.count) return false

    const node = new Node(element)
    let current = this.head
    if (index === 0) {
      // 插入链表头
      node.next = current
      this.head = node
    } else {
      // let previous = null
      // let index = 0
      // while (index++ < position) {
      //   previous = current
      //   current = current.next
      // }
      // node.next = current
      // previous.next = node
      const previous = this.getElementAt(index - 1)
      current = previous.next
      node.next = current
      previous.next = node
    }
    this.count++
    return true
  }

  // remove 从链表中移除一个元素
  remove (element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  // indexOf 返回元素在链表中的索引，如果不存在则返回 -1
  indexOf (element) {
    let current = this.head
    for (let i = 0; i < this.count && current !== null; i++) {
      if (current.element === element) return i
      current = current.next
    }
    return -1
  }

  // removeAt 从链表特定位置移除一个元素
  removeAt (index) {
    if (index < 0 || index > this.count) return undefined
    
    let current = this.head
    if (index === 0) {
      this.head = current.next
    } else {
      let previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = current.next
    }
    this.count--
  }

  // isEmpty 判断链表是否为空
  isEmpty () {
    return this.size() === 0
  }

  // 链表包含元素个数
  size () {
    return this.count
  }

  getHead () {
    return this.head
  }

  // toString
  toString () {
    if (this.head === null) return ''
    let linkedString = `${this.head.element}`
    let current = this.head.next
    for (let i = 0; i < this.size() && current !== null; i++) {
      linkedString = `${linkedString},${current.element}`
      current = current.next
    }
    return linkedString
  }

  // 返回链表中特定位置的元素，如果不存在则返回 undefined
  getElementAt (index) {
    if (index < 0 || index >= this.count) return undefined
    let node = this.head
    let _index = 0
    while (_index++ < index && node !== null) {
      node = node.next
    }
    return node
  }


}

