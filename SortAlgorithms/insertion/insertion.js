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
    // 若arr[i]前有大于 arr[i] 的值的化，向后移位，腾出空间，直到一个 <= arr[i] 的值
    // let j = i - 1
    // for (j; j >= 0; j--) {
    //   if (array[j] > temp) {
    //     array[j + 1] = array[j]
    //   } else {
    //     break
    //   }
    // }
    // array[j + 1] = temp


    array[j] = temp
  }
}

const arr = [10, 8, 11, 2, 5, 33, 19]
insertionSort(arr)
console.log(arr)