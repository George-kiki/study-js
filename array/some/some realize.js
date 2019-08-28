/**
 * Array.some(fn) 源码实现
 * */
// eslint-disable-next-line no-extend-native
export default Array.prototype.mySome = function (fn) {
  let flag = false
  if (!this.length) return flag
  for (let i = 0; i < this.length; i++) {
    flag = fn(this[i], i, this)
    if (typeof flag !== 'boolean') {
      throw new TypeError('return not boolean')
    }
    if (flag) return flag
  }
  return flag
}
const form = {
  username: '',
  password: '',
  email: '',
  phoneNumber: '1'
}
let arr = []
let a = Object.values(form).mySome(item => {
  return item !== ''
})
let b = Object.values(form).some(item => {
  return item !== ''
})
let c = arr.mySome(item => item)
let d = arr.some(item => item)
console.log(a, b)
console.log(c, d)
