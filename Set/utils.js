const { Set } = require('./set.js')

const set = new Set()
set.add('a')
set.add('b')
set.add('c')

console.log(set.values())
console.log(set.size())
console.log(set.has('a'))
console.log('add a', set.add('a'))
console.log('add d', set.add('d'))
console.log(set.delete('a'))
console.log(set.has('a'))
console.log(set.size())

set.clear()
console.log(set)

