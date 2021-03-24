/**
 * 冒泡排序
 * @param { Array } array 
 */

let count = 0
function bubbleSort (array) {
  const len = array.length
  for (let i = 0; i < len; i++) {
    let hasChange = false
    for (let j = 0; j < len - 1; j++) {
      count++
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
        hasChange = true
      }
    }
    if (!hasChange) break         // 如果是 false ，说明所有元素已经到位置了
  }
}
let num = 0
function bubbleSortV2 (array) {
  const { length: len } = array
  for (let i = 0; i < len; i++) {
    let hasChange = false
    for (let j = 0; j < len - i - 1; j++) {
      num++
      if (array[j] > array[j + 1]) {
        swap(array, j, j+1)
        hasChange = true
      }
    }
    if (!hasChange) break
  }
}

let n = 0
function bubbleSortV3(array) {
  
  for (let i = array.length - 1; i > 0; i--) {
    let hasChange = false
    for (let j = 0; j < i; j++) {
      n++
      if (array[j] > array[j + 1]) {
        swap(array, j, j+1)
        hasChange = true
      }
    }
    if (!hasChange) break
  }
}

function swap (array, m, n) {
  [array[m], array[n]] = [array[n], array[m]]
}

const arr = [10, 8, 11, 2, 5, 33, 19]
// bubbleSort(arr)
// bubbleSortV2(arr)
bubbleSortV3(arr)
console.log(arr)
// console.log(num)
// console.log(count)
// console.log(n)