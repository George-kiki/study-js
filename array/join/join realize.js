/**
 *@Array.join(str) 源码实现
 * */
// eslint-disable-next-line no-extend-native
Array.prototype.myJoin = function (str) {
  if (!Array.isArray(this)) {
    throw new TypeError('not array')
  }
  let string = str || ','
  let result = this[0]
  for (let i = 1; i < this.length; i++) {
    result += string + this[i]
  }
  delete result[0]
  return result
}
let str = "Let's take LeetCode contest"
console.log(str.split('').myJoin())
