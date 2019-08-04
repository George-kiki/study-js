/**
 * Array.reverse() 源码实现
 * */
Array.prototype.myReverse = function () {
  let arr = []
  if (!this.length) return this
  for (let i = this.length - 1; i >= 0; i--) {
    arr.push(this[i])
  }
  for (let i = 0; i < this.length; i++) {
    this[i] = arr[i]
  }
  return this
}

let arr = [1, 2, 3, 4, 5]
let att = []
let a = arr.myReverse()
let b = att.reverse()
let c = att.myReverse()
console.log(a, arr)
console.log(b, c)

let str = "Let's take LeetCode contest"

function arrayJoin (str) {
  return str.split('').myReverse().join('').split(' ').myReverse().join(' ')
}

console.log(arrayJoin(str))
