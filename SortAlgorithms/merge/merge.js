/**
 *  归并排序
 * @param { Array } array 
 */
function mergeSort (array) {
  let { length } = array
  if (length <= 1) return array
  let middle = Math.floor(length / 2)
  let left = array.slice(0, middle)
  let right = array.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}


function merge(left, right) {
  let temp = []
  let leftIndex = 0
  let rightIndex = 0
  while (left.length > leftIndex && right.length > rightIndex) {
    if (left[leftIndex] <= right[rightIndex]) {
      temp.push(left[leftIndex])
      leftIndex++
    } else {
      temp.push(right[rightIndex])
      rightIndex++
    }
  }
  // return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
  // 看看是 leftIndex 还是 rightIndex 导致的 while 循环结束
  // 如果是 leftIndex < left.length ，说明 right 部分已经 全部都 push 进 temp 里了，将剩余的 left 部分直接合并即可
  // 如果 leftIndex >= left.length ，说明 left 部分已经全部 push 进 temp里面了，将剩余的 right 直接合并即可
  const surplusItems = leftIndex < left.length ? left.slice(leftIndex) : right.slice(rightIndex)
  return temp.concat(surplusItems)
}

const arr = [10, 8, 11, 2, 5, 33, 19]
let sortArr = mergeSort(arr)
console.log(sortArr)
