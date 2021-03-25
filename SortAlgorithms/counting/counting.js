/**
 * 计数排序
 * @param { Array } array 
 */
function countingSort (array) {
  if (array.length <= 1) return array
  
  const maxVal = findMaxVal(array)
  const counts = new Array(maxVal + 1)
  array.forEach(element => {
    if (!counts[element]) {
      counts[element] = 0
    }
    counts[element]++
  })

  let sortIndex = 0
  counts.forEach((count, i) => {
    while (count > 0) {
      array[sortIndex++] = i
      count--
    }
  })

  return array

}

/**
 * 获取数组中的最大值
 * @param { Array } array
 * @return { Number } 
 */
function findMaxVal (array) {
  const { length } = array
  let max = array[0]
  for (let i = 1; i < length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max
}

const arr = [10, 8, 11, 2, 5, 5, 33, 19]
const ret = countingSort(arr)

console.log(ret)