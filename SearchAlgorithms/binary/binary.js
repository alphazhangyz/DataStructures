/**
 * 二分查找
 * @param { Array } array  
 * @param { any } value 搜索值
 * @return { Number } 索引值
 */
function binarySearch (array, value) {
  // 默认 array 已经排序好
  const DOES_NOT_EXIST_INDEX = -1
  let low = 0
  let high = array.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    const element = array[mid]
    if ( element === value) {
      return mid
    } else if (element < value){
      // 选中值 小于搜索值 右侧查找
      low = mid + 1

    } else {
      // 选中值 大于搜索值 左侧查找
      high = mid - 1
    }
  }

  return DOES_NOT_EXIST_INDEX
}

const arr = [2, 5, 8, 11, 19, 33, 19]

const index = binarySearch(arr, 11)
console.log(index)
