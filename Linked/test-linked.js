const { Linked } = require('./linked')

const linked = new Linked()

linked.push('a')
linked.push('b')
linked.push('c')
linked.push('d')

console.log(linked.size())
console.log(linked.isEmpty())
console.log(linked.toString())
console.log(linked.getElementAt(2))

linked.insert('zhang', 0)
console.log(linked.toString())
linked.insert('test', 5)
console.log(linked.toString())

console.log(linked.indexOf('c'))
console.log(linked.getHead())

linked.removeAt(linked.indexOf('c'))
console.log(linked.toString())

linked.remove('b')
console.log(linked.toString())