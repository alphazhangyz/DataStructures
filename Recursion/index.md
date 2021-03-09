# 递归

## 理解递归

> `递归`是一种解决问题的方法，它从解决问题的各个小部分开始，直到解决最初的大问题。（`递归`通常涉及函数调用自身）；每个`递归`函数都必须有基线条件，即一个不再递归调用的基线条件，以防止无限递归

## 计算一个数的阶乘
```js
  function factorial (num) {
    if (num === 1 || num === 0) return 1
    return num * factorial(num - 1)
  }

  // 可在浏览器中 debugger 跟函数的调用栈

  // 尾调用
  function factorial1 (n, total = 1) {
    if (n === 1) return 1
    return factorial1(n - 1, n * total)
  }

```

## 斐波那契数列
```js
  // 初始版本
  /**
   * 位置为 0 的斐波那契数是 0
   * 位置为 1 和 2 的斐波那契数是 1
   * n (n > 2) 的斐波那契数是 (n - 1) 的斐波那契数和 (n - 2) 的斐波那契数之和
   * 
   */
  function fibonacci (num) {
    if (num < 1) return 0
    if (num <= 2) return 1
    return fibonacci(num - 1) + fibonacci(num - 2)
  }

  // 带缓存版本
  function fibonacciMemoization (num) {
    let cache = [0, 1]
    const fibonacci = n => {
      if (cache[n] != null) return cache[n]
      return cache[n] = fibonacci(n -1) + fibonacci(n - 2)
    }
    return fibonacci(num)
  }

  // 尾调用
  fibonacciLast (n, n1 = 1, n2 = 1) {
    if (n <= 2) return n2
    return fibonacciLast(n, n2, n1 + n2)
  }


```
## JavaScript调用栈
