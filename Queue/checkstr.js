const { Deque } = require('./deque')

// 回文检查

/**
 * 
 * @param { String } str 
 * @return { Boolean }
 */
function strEqualChecker (str) {
  if (!str || str && str.length === 0) return false
  const deque = new Deque()
  const lowerString = str.toLocaleLowerCase().split(' ').join('')
  let isEqual = true, firstChar, lastChar

  for (let i = 0, len = lowerString.length; i < len; i++) {
    deque.addBack(lowerString.charAt(i))
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront()
    lastChar = deque.removeBack()
    if (firstChar !== lastChar) {
      isEqual = false
    }
  }

  return isEqual

}


console.log('Step on no pets', strEqualChecker('Step on no pets'))
console.log('abccba', strEqualChecker('abccba'))