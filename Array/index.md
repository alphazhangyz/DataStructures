# 数组

## 创建和初始化数组

> 通过 `new` 操作符或者对象字面量的形式创建 `[]`，推荐使用对象字面量的形式创建。访问某一个索引对应的元素 `Array[index]`
## 添加元素

- 在数组末尾插入元素: `push(item)`

      向数组末尾添加新的元素，返回添加后数组的长度，比较高效

- 在数组开头插入元素: `unshift(item)`
      
      从数组的开头插入元素，返回添加元素后数组的长度，由于需要使数组里面原有值都向后移动一位，效率比较低

## 删除元素

- 在数组末尾删除元素: `pop()`

      返回删除的元素。比较高效

- 在数组开头删除元素: `shift()`

      返回删除的元素，效率比较低，同 unshift() 操作相反
## 在任意位置添加或删除元素

- `splice(startIndex, removeCount, addItems)`

## 二维和多维数组

> js 可以利用数组嵌套数组实现二维或者多维数组

## js 数组方法参考

- 排序元素

  - sort(compareFunction)
  ```js
    function compare (a, b) {
      if (a > b) return 1
      if (a < b) return -1
      return 0
    }

  ```

  - 自定义排序
  ```js
    // 对任何对象类型对数组排序，也可以根据 compareFunction 来比较元素
    const friends = [
      {name: 'James', age: 20},
      {name: 'Jake', age: 18},
      {name: 'Lucy', age: 22}
    ]

    function comparePersonByAge (a, b) {
      if (a.age < b.age) return -1
      if (a.age > b.age) return 1
      return 0
    }
    const sortPerson = friends.sort(comparePersonByAge)
    console.log(sortPerson)
    //[
    //  {name: 'Jake', age: 18},
    //  {name: 'James', age: 20},
    //  {name: 'Lucy', age: 22}
    //]
    
  ```

  - 字符串排序

    - 字符串做比较的时候是根据字符串的 ASCII 值来比较的

    - 也可以自定义 `compareFunction` 函数来实现字符串比较