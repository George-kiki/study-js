// reduce 使用方法
/**
 * Array.reduce(callback(accumulator, currentValue, currentIndex, array), init) method and application
 * callback 4个参数：
 *  accumulator 累积值，它是上一次调用回调时返回的累积值
 *  currentValue 当前数组正在处理的元素
 *  currentIndex 当前数组正在处理元素的元素下标
 *  array 调用reduce的数组
 * init 作为第一次调用 callback函数时的第一个参数的值。
 *      如果没有提供初始值，则将使用数组中的第一个元素。
 *      在没有初始值的空数组上调用 reduce 将报错。
 * */

/**
 * Array.reduce()使用案例
 * 数组扁平化
 * */

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let b = arr.reduce((a, b) => a.concat(b), []) // [1,2,3,4,5,6,7,8,9]
