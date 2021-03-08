/**
 * 集合
 */

class Set {
  constructor () {
    this.items = {}
  }

  // 向集合添加一个新元素
  add (element) {
    const hasElement = this.has(element)
    if (!hasElement) {
      this.items[element] = element
    }
    return !hasElement
  }

  // 从集合中移除一个元素
  delete (element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  // 查看元素是否在集合中
  has (element) {
    // this.items.hasOwnProperty(element)
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  // 移除集合中的所有元素
  clear () {
    this.items = {}
  }

  // 返回集合所包含元素数量
  size () {
    // let count = 0
    // for (let key in this.items) {
    //   判断是否是对象自身的属性  
    //   if (this.has(key)) {
    //     count++
    //   }
    // }
    // return count
    return Object.keys(this.items).length
  }

  // 返回包含集合中所有值的数组
  values () {
    // const values = []
    // for (let key in this.items) {
    //   if (this.has(key)) {
    //     values.push(key)
    //   }
    // }
    // return values
    return Object.keys(this.items)
  }

  /**
   * 集合的运算
   */
  
  // 并集
  union (otherSet) {
    const unionSet = new Set()
    this.values().forEach(item => unionSet.add(item))
    otherSet.values().forEach(item => unionSet.add(item))
    return unionSet
  }


  // 交集
  intersection (otherSet) {
    const intersectionSet = new Set()
    const values = this.values()
    // for (let i = 0, len = values.length; i < len; i++) {
    //   if (otherSet.has(values[i])) {
    //     intersectionSet.add(values[i])
    //   }
    // }

    /** 改进版本 */
    const otherSetValues = otherSet.values()
    let biggerSet = values
    let smallerSet = otherSetValues
    if (otherSetValues.length > values.length) {
      biggerSet = otherSetValues
      smallerSet = values
    }
    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value)
      }
    })

    return intersectionSet
  }


  // 差集
  difference (otherSet) {
    const differenceSet = new Set()
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    })
    return differenceSet
  }

  // 子集
  isSubsetOf (otherSet) {
    if (this.size() > otherSet.size()) return false
    let isSubSet = true
    isSubSet = this.values().every(value => otherSet.has(value))
    return isSubSet
  }


}

module.exports = { Set }