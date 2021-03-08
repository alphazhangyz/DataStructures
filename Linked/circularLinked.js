const { Linked, Node } = require('./linked')


class CircularLinked extends Linked {
  constructor () {
    super()
  }

  // 在任意位置插入元素
  insert (element, index) {
    if (index < 0 || index > this.count) return false
    const node = new Node(element)
    let current = this.head
    if (index === 0) {
      if (this.head == null) {      // 没有，新增一个
        this.head = node
        node.next = this.head
      } else {
        node.next = current
        current = this.getElementAt(this.size())      // 获取最后一个元素
        this.head = node
        current.next = this.head       // 将最后一项的引用指向 head
      }
    } else {
      const previous = this.getElementAt(index - 1)
      node.next = previous
      previous.next = node
    }
    this.count++
    return true
  }


  // 从任意位置删除
  removeAt(index) {
    if (index < 0 || this.count > index) return undefined
    let current = this.head
    if (index === 0) {
      // 判断链表中的元素数量
      if (this.size() === 1) {
        this.head = undefined
      } else {
        const removed = this.head
        current = this.getElementAt(this.size())
        this.head = removed.next
        current.next = this.head
        current = removed
      }
    } else {
      const previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = current.next
    }
    this.count--
    return current.element
  }

}