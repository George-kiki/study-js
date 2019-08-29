/**
 * Array.reduce(fn(accumulator,currentValue,currentIndex,array)init)
 * */

// eslint-disable-next-line no-extend-native
export default Array.prototype.myReduce = function (fn, init) {
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

let deckCard = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 1, 1]

let hasGroupsSizeX = (deck) => {
  const gcd = (...arr) => { // 利用reduce加递归 做余运算
    let _gcd = (x, y) => !y ? x : gcd(y, x % y)
    // [3, 2, 2, 2, 2]
    return [...arr].myReduce((x, y) => {
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
