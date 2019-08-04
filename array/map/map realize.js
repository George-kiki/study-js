/**
 *@Array.map(fn) 源码实现
 * */

// eslint-disable-next-line no-extend-native
Array.prototype.myMap = function (fn) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push(fn(this[i], i, this))
  }
  return arr
}

let arr = [1, 2, 3, 4, 5]
let att = arr.map(item => item + 1)
console.log(arr, att)
// arr[1,2,3,4,5] att [2,3,4,5,6]
