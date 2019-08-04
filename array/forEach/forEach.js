// forEach方法使用
/**
 * Array.forEach(fn(item, index, array))
 * item 数组中正在处理的当前对象
 * index 数组中正在处理的当前对象下标
 * array 正在操作的数组
 *
 * forEach() 不可以中断循环
 * 没有返回值
 *
 * forEach和map的区别就是
 * forEach 没有返回值
 * map 返回新数组
 *
 * */
/**
 * Array.forEach(fn(item, index, array))使用例子
 * */

let arr = [1, 2, 3, 4, 5]
arr.forEach(item => {
  arr.push(item + 1)
})
console.log(arr)
