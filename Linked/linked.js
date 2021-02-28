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


}