/**
 * 快速排序
 * @param { Array } array 
 */
function quickSort (array) {
  quick(array, 0, array.length - 1)
}

function quick (array, left, right) {
  let index
  if (array.length > 1) {
    index = partition(array, left, right)
    if (left < index - 1) {
      quick(array, left, index - 1)
    }
    if (index < right) {
      quick(array, index, right)
    }
  }
}

/**
 * 
 * @param { Array } array 
 * @param { Number } left 
 * @param { Number } right 
 */
function partition (array, left, right) {
  const pivotIndex = Math.floor((left + right) / 2)
  const pivot = array[pivotIndex]
  let i = left
  let j = right
  while (i <= j) {
    while (array[i] < pivot) {
      i++
    }
    while (array[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(array, i, j)
      i++
      j--
    }
  }
  
  return i
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]]
}

const arr = [10, 8, 11, 2, 5, 33, 19]
quickSort(arr)
console.log(arr)