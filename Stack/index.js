/**
 * 基于对象的栈数据结构封装
 * 
 */
class Stack {
  constructor () {
    this.items = {}
    this.count = 0
  }

  // 向栈中插入元素
  push(element) {
    this.items[this.count] = element
    this.count++;
  }

  // 栈的大小
  size () {
    return this.count
  }

  // 验证是否为空
  isEmpty () {
    return this.count === 0
  }

  // 从栈中弹出元素
  pop () {
    if (this.isEmpty()) return undefined
    this.count--;
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  // 获取栈顶顶数据
  peek () {
    if (this.isEmpty()) return undefined
    return this.items[this.count - 1]
  }

  // 清空
  clear () {
    /**
     * this.items = {}
     * this.count = 0
     */
    // 根据 LIFO 
    while(!this.isEmpty()) {
      this.pop()
    }
  }

  toString () {
    if (this.isEmpty()) return ''
    let retString = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      retString = `${retString},${this.items[i]}`
    }
    return retString
  }
}