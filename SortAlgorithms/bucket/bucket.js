/**
 * 桶排序
 * @param { Array } array
 * @param { Number } bucketSize 每个桶中需要分布的元素个数
 */
function bucketSort (array, bucketSize = 5) {
  if (array.length <= 1) return array

  // 获取桶
  // 需要指定多少个桶来排序各个元素， 默认使用 5 个桶
  // 桶排序在所有元素平分到每个桶的时候表现最好
  // 如果元素非常稀疏，则使用更多的桶
  // 如果元素非常密集，则使用较少的桶
  const buckets = createBuckets(array, bucketSize)
  // return sortBuckets(buckets)
}

/**
 * 创建桶
 * @param { Array } array 
 * @param { Number } bucketSize 
 * @return { Array }
 */
function createBuckets (array, bucketSize) {
  let { minValue, maxValue } = findMinAndMaxValue(array)
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  const buckets = []
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = []
  }

  for (let i = 0, len = array.length; i < len; i++) {
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize)
    buckets[bucketIndex].push(array[i])
  }
  return buckets
}

/**
 * 排序桶里的元素
 * @param { Array } buckets 
 */
function sortBuckets (buckets) {

}


function findMinAndMaxValue(array) {
  let minValue = array[0]
  let maxValue = array[0]

  for (let i = 1, len = array.length; i < len; i++) {
    if (array[i] < minValue) {
      minValue = array[i]
    } else if (array[i] > maxValue) {
      maxValue = array[i]
    }
  }

  return {
    minValue,
    maxValue
  }
}