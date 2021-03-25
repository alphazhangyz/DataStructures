/**
 * 计数排序
 * @param { Array } array 
 */
function countingSort (array) {

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