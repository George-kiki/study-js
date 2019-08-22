/**
 * Array.filter(fn(ele, index, array)) 方法实现
 * */

// eslint-disable-next-line no-extend-native
Array.prototype.myFilter = function (fn) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      arr.push(this[i])
    }
  }
  return arr
}
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

let arr = words.myFilter(item => item.length > 6)
console.log(arr)
