const { Dictionary } = require('./dictionary.js')

const dic = new Dictionary()
// console.log(dic.hasKey('a'))
// console.log(dic.hasKey('a1'))

dic.set('aa', 'cc')
dic.set('bb', 'cc')
// console.log(dic.get('aa'))

const fn = () => console.log(111)
const fn1 = () => console.log(1111)

const o = {}
const o1 = {}

console.log(fn.toString())
dic.set(fn, 'test')
dic.set(fn1, 'tes11t')

dic.set(o, 'fff')
dic.set(o1, 'fff')

console.log(dic.size())
console.log(dic.keyValues())
console.log(dic.toString())