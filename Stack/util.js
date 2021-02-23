const { Stack, StackArray } = require('./index.js')

/**
 * 将十进制数据转换成二进制
 * @param { Number } decNumber 
 * @return { Number }
 */
function decimalToBinary (decNumber, isArrayStack) {
  // 定义栈
  let retStack = new Stack()
  if (isArrayStack) {
    retStack = new StackArray()
  }

  let num = decNumber
  let binaryString = ''
  while (num > 0) {
    // 获取余数并推入栈
    retStack.push(num % 2)

    // 获取整除的结果作为下一次的运算数字
    num = Math.floor(num / 2)
  }

  while (!retStack.isEmpty()) {
    binaryString += retStack.pop()
  }

  return binaryString

}

let num = decimalToBinary(100)
console.log(num)
let num2 = decimalToBinary(100, true)
console.log(num2)

console.log(decimalToBinary(10))