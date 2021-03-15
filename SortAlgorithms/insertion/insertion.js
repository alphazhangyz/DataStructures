/**
 * 插入排序
 * @param { Array } array 
 */
function insertionSort (array) {
  const { length } = array
  let temp
  for (let i = 1; i < length; i++) {
    temp = array[i]
    let j = i
    while (j > 0 && array[j - 1] > temp) {
      // 如果前一项大于当前需要插入的项，则将前一项赋值给当前项，然后继续向前面找，直到前面的项 <= 当前需要插入的项
      array[j] = array[j - 1]
      j--
    }
    array[j] = temp
  }
}

const arr = [10, 8, 11, 2, 5, 33, 19]
insertionSort(arr)
console.log(arr)