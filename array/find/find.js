// Array.find() method of application
/**
 * Array.find(fn(ele, index, array))
 * ele 数组中正在处理的对象
 * index 数组中正在处理对象的下标
 * array 当前正在处理的数组
 *
 * Array.find() 从下标0开始遍历,遇到满足条件的元素返回该元素(返回满足条件的第一个元素) 没有则返回undefined
 * */

/**
 * Array.find() 使用案例
 * */
let arr = [
  { name: 'simon' },
  { name: 'lisa' },
  { name: 'tim' }
]

console.log(arr.find(item => {
  return item.name === 'tim'
}))
