/**
 * 基于对象实现
 */

class Queue {
  constructor () {
    this.count = 0           // 数量 
    this.lowestCount = 0     // 队列头部
    this.items = {}
  }

  // 向队列添加元素
  enqueue (element) {
    this.items[this.count] = element
    this.count++
  }

  // 移除队列的第一项并返回该项
  dequeue () {
    if (this.isEmpty()) return undefined
    const ret = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return ret
  }

  // 查看队列头部元素
  peek () {
    if (this.isEmpty()) return undefined
    return this.items[this.lowestCount]
  }

  // 查看队列是否为空
  isEmpty () {
    return this.count - this.lowestCount === 0
  }

  // 查看数量
  size () {
    return this.count - this.lowestCount
  }

  // 清空队列
  clear () {
    /**
     * 简单暴力
     * this.lowestCount = 0
     * this.count = 0
     * this.items = {}
     */

     // FIFO
    while(!this.isEmpty()) {
      this.dequeue()
    }
    
  }

  toString () {
    if (this.isEmpty()) return ''
    let retString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      retString = `${retString},${this.items[i]}`
    }
    return retString
  }

}



/**
 * 基于数组实现
 */

class QueueArray {
  constructor () {
    this.items = []
  }

  // 添加元素
  enqueue (element) {
    this.items.push(element)
  }

  // 移除第一项并返回该项
  dequeue () {
    if (this.isEmpty()) return undefined
    return this.items.shift()
  }

  // 查看第一项
  peek () {
    if (this.isEmpty()) return undefined
    return this.items[0]
  }

  // 是否为空
  isEmpty () {
    return this.size() === 0
  }

  // 长度
  size () {
    return this.items.length
  }

  // 清空队列
  clear () {
    /**
     * 简单暴力版
     * this.items = []
     */
    while (!this.isEmpty()) {
      this.enqueue()
    }
  }

  toString () {
    if (this.isEmpty()) return ''
    let retString = `${this.items[0]}`
    for (let i = 1, len = this.items.length; i < len; i ++) {
      retString = `${retString},${this.items[i]}`
    }
    return retString
  }

}

module.exports = {
  Queue,
  QueueArray
}