// 队列使用
const { Queue, QueueArray } = require('./index')

const queue = new Queue()
queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')

console.log(queue.toString())

const size = queue.size()
console.log(size)

const _f = queue.dequeue()
console.log(_f)
console.log(queue.toString())
