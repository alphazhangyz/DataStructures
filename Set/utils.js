const { Set } = require('./set.js')

const set = new Set()
set.add('a')
set.add('b')
set.add('c')

// console.log(set.values())
// console.log(set.size())
// console.log(set.has('a'))
// console.log('add a', set.add('a'))
// console.log('add d', set.add('d'))
// console.log(set.delete('a'))
// console.log(set.has('a'))
// console.log(set.size())

// set.clear()
// console.log(set)

const set1 = new Set()
set1.add('a')
set1.add('b')
set1.add('c')
set1.add('d')

const set2 = new Set()
set2.add('a')
set2.add('b')
set2.add('e')
set2.add('d')

console.log('isSubset', set.isSubsetOf(set1))
console.log('isSubset', set.isSubsetOf(set2))

console.log('union', set.union(set1).values())

console.log('intersection', set.intersection(set1).values())

console.log('difference', set.difference(set1).values())
console.log('difference', set.difference(set2).values())


