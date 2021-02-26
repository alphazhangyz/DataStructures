// 击鼓传花
const { Queue } = require('./index')
/**
 * 组成一个队列，当 num 等于当前人当索引时，去除该项，不是当前索引当添加至队列当尾部；去除后重新喊数，直至还剩最后一个人
 * @param { Array } elementList 
 * @param { Number } num 
 * @return element
 */
function hotPotato (elementList, num) {
  const queue = new Queue()
  for (let i = 0, len = elementList.length; i < len; i++) {
    queue.enqueue(elementList[i])
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }

  return queue.dequeue()
}

const list = ['a', 'b', 'c', 'd', 'e']
const num = 3
console.log(hotPotato(list, num))
