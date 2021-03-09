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

```

## 斐波那契数列



## JavaScript调用栈
