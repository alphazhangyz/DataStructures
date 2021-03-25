/**
 * 顺序搜索
 * @param { Array } array 
 * @param { any } value 
 * @return { Number } 返回对应的索引
 */
function sequentialSearch (array, value) {
  const DOES_NOT_EXIST_INDEX = -1

  for (let i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i
    }
  }
  return DOES_NOT_EXIST_INDEX
}