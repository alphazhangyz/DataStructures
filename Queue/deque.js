// 双端队列

class Deque {
  constructor () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  // 在前端添加新元素
  addFront (element) {
    // 队列为空
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {      // 队列前面已经移除了一项
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {   // 队列前面一项都没有移除
      for (let i = this.count; i > 0; i-- ) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.items[0] = element
    }
  }

  // 在后端添加新元素
  addBack (element) {
    this.items[this.count] = element
    this.count++
  }

  // 移除前端的第一个元素并返回
  removeFront () {
    if (this.isEmpty()) return undefined
    const ret = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return ret
  }

  // 移除后端的第一个元素并返回
  removeBack () {
    if (this.isEmpty()) return undefined
    this.count--
    const ret = this.items[this.count]
    delete this.items[this.count]
    return ret
  }

  // 查看前端的第一个元素
  peekFront () {
    if (this.isEmpty()) return undefined
    return this.items[this.lowestCount]
  }

  // 查看后端的第一个元素
  peekBack () {
    if (this.isEmpty()) return undefined
    return this.items[this.count - 1]
  }

  // 是否为空
  isEmpty () {
    return this.size() === 0
  }

  // 数量
  size () {
    return this.count - this.lowestCount
  }

  // 清空队列
  clear () {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  toString () {
    if (this.isEmpty()) return ''
    let retString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      retString = `${retString},${this.count[i]}`
    }
    return retString
  }
}

module.exports = {
  Deque
}