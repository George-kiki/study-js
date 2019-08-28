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

/**
 * leetCode题目
 * 给定一副牌，每张牌上都写着一个整数。
 *
 *  此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
 *  每组都有X张牌。
 *  组内所有的牌上都写着相同的整数。
 *  仅当你可选的 X >= 2 时返回true
 * */

let deckCard = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 1]

let hasGroupsSizeX = (deck) => {
  const gcd = (...arr) => { // 利用reduce加递归 做余运算
    let _gcd = (x, y) => !y ? x : gcd(y, x % y)
    // [3, 2, 2, 2, 2]
    return [...arr].reduce((x, y) => {
      return _gcd(x, y)
    })
  }
  let obj = Object.create(null)
  deck.forEach(v => {
    obj[v] ? obj[v]++ : obj[v] = 1
  })
  let arr = Object.values(obj)
  return gcd(...arr) !== 1
}
console.log(hasGroupsSizeX(deckCard))
