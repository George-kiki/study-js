/**
 * Array.reduce(fn(accumulator,currentValue,currentIndex,array)init)
 * */

// eslint-disable-next-line no-extend-native
Array.prototype.myReduce = function (fn, init) {
  let pre = init
  let i = 0
  if (!init) {
    pre = this[0]
    i = 1
  }
  for (i; i < this.length; i++) {
    pre = fn(pre, this[i], i, this)
  }
  return pre
}

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

let b = arr.myReduce((a, b) => a.concat(b), [])

console.log(b)
