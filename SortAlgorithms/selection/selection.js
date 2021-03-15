/**
 * 选择排序
 * @param { Array } array 
 */
function selectionSort(array) {
  const { length } = array
  let minIndex
  for (let i = 0; i < length - 1; i++) {
    minIndex = i
    for (let j = i; j < length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      swap(array, i, minIndex)
    }
  }
}

function swap(array, m, n) {
  [array[m], array[n]] = [array[n], array[m]]
}

const arr = [10, 8, 11, 2, 5, 33, 19]
selectionSort(arr)
console.log(arr)