// Array.indexOf() method of application
/**
 * Array.indexOf(findEle, fromIndex)
 * findEle 要查找的元素 如果没有该元素 则返回-1 如果查找到了该元素则返回元素所在数组的对应下标
 * fromIndex 开始查找的位子,不传默认为0,如果未负数,如-1 则从数组的最后一位开始,如果该值大于或等于数组的长度 直接返回-1
 * */

/**
 * indexOf()使用案例
 * */

let arr = ['bibo', 'tom', 'jack', 'george']

let notIndex = arr.indexOf('jack', -1)
let index = arr.indexOf('george')
let notEle = arr.indexOf('tim')
console.log(index) // 3
console.log(notEle) // -1
console.log(notIndex) // -1
