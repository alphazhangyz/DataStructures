/**
 * 字典
 */

class ValuePair {
  constructor (key, value) {
    this.key = key
    this.value = value
  }
  toString () {
    return `[${this.key}: ${this.value}]`
  }
}

class Dictionary {
  constructor () {
    this.table = {}
    this.toStrFn = toString
  }

  // 向字典中添加元素
  set (key, value) {
    if (key == null && value == null) return false
    const tableKey = this.toStrFn(key)
    this.table[tableKey] = new ValuePair(key, value)
    return true
  }

  // 查询是否存在
  hasKey (key) {
    return Object.prototype.hasOwnProperty.call(this.table, this.toStrFn(key))
  }

  // 删除某一个元素
  remove (key) {
    if (!this.hasKey(key)) return false
    delete this.table[this.toStrFn(key)]
    return true
  }

  // 获取
  get (key) {
    if (!this.hasKey(key)) return undefined
    const valuePair = this.table[this.toStrFn(key)]
    return valuePair
  }

  // 清空
  clear () {
    this.table = {}
  }

  // 包含值的数量
  size () {
    return Object.keys(this.table).length
  }

  // 是否为空
  isEmpty () {
    return this.size() === 0
  }

  // 返回所有的键组成的数组
  keys () {
    // return Object.keys(this.table)     // 获取的 key 不是原始 key，是经过 toStrFn() 转换之后的
    return this.keyValues().map(item => item.key)   // 获取原始key
  }

  // 返回所有的值组成的数组
  values () {
    return this.keyValues().map(item => item.value)
  }

  // 返回所有的键值对
  keyValues () {
    
    const valuePairs = []
    for (let key in this.table) {
      if (this.hasKey(key)) {
        valuePairs.push(this.table[key])
      }
    }
    return valuePairs

    // return Object.values(this.table)
  }

  // 迭代方法
  forEach (cbFn) {
    const valuePairs = this.keyValues()
    for (let i = 0, len = valuePairs.length; i < len; i++) {
      const { key, value } = valuePairs[i]
      const ret = cbFn(key, value)
      if (ret === false) {
        break
      }
    }
  }

  toString () {
    if (this.isEmpty()) return ''
    const valuePairs = this.keyValues()
    let dicString = `${valuePairs[0].toString()}`
    for (let i = 1, len = valuePairs.length; i < len; i++) {
      dicString = `${dicString}, ${valuePairs[i].toString()}`
      console.log(dicString)
    }
    return dicString
  }

}

function toString (item) {
  if (item === null) return 'NULL'
  if (item === undefined) return 'UNDEFINED'
  if (typeof item === 'string' || item instanceof String) return `${item}`
  return item.toString()         
  /**
   * 测试后存在 bug
   * 如果 是函数表达式，对象声明等，假如 fn = () => {}  fn1 = () => {}
   * dic.set(fn, '1')  dic.set(fn1, '1')     fn1 会覆盖 fn
   * o = {} o1 = {}
   * dic.set(o, '1')  dic.set(o1, '22')   o1 会覆盖 o
   */
}

module.exports = { Dictionary }