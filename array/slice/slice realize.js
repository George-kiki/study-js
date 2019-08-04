/**
 * @Array.slice(start, end) 源码实现
 * */
// eslint-disable-next-line no-extend-native
Array.prototype.mySlice = function (start, end) {
  if (!Array.isArray(this)) {
    throw new TypeError('not array')
  }
  let result = []
  start = start || 0
  end = end || this.length
  if (start < 0) {
    start = start + this.length
  }
  if (end < 0) {
    end = end + this.length
  }
  if (start > this.length) {
    return result
  }
  if (end > this.length) {
    end = this.length
  }
  for (let i = start; i < end; i++) {
    result.push(this[i])
  }
  return result
}

let arr = [1, 2, 3, 4, 5]
let arrs = [1, 2, 3, 4, 5]
console.log(arrs.slice(2, 6))
console.log(arr.mySlice(2, 6))
