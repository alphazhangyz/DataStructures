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
  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const arr = [10, 8, 11, 2, 5, 33, 19]
let sortArr = mergeSort(arr)
console.log(sortArr)
