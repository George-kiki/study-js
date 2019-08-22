// Array.filter() method of application
/**
 * Array.filter(fn(ele, index, array))
 * ele 数组中正在处理的对象
 * index 数组中正在处理对象的下标
 * array 当前正在处理的数组
 *
 * Array.filter() 从下标0开始遍历,将满足条件的元素放入新数组中 遍历结束后返回 没有则返回空数组
 * */

/**
 * Array.filter() 使用案例
 * */

let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

const result = words.filter(word => word.length > 6)

console.log(result)// ["exuberant", "destruction", "present"]
