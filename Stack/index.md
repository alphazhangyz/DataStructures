# 栈

> 栈是一种遵从 **`后进先出（LIFO Last-In-First-Out）`** 原则的有序集合。**新添加或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底**

> 栈也被用在编译器和内存中保存变量，方法调用等，也被用于浏览器历史记录

## 栈封装

## 保护数据结构内部元素

- 使用下划线标明为私有变量 _
```js
  class Stack {
    constructor () {
      this._items = {}
      this._count = 0
    }
  }
```

- 使用 `Symbol` 实现
```js
  const _items = Symbol('stackItems')
  class Stack {
    constructor () {
      this[_items] = []
    }
  }
```

- 使用 `WeakMap` 实现
```js
  const items = new WeakMap()
  class Stack {
    constructor () {
      items.set(this, [])
    }

    push (element) {
      const self = items.get(this)
      self.push(element)
    }
  }

```
