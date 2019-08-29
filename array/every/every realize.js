/**
 * Array.every(fn(item, index, array))
 * */

// eslint-disable-next-line no-extend-native
export default Array.prototype.myEvery = function (fn) {
  let flag = true
  if (!this.length) return flag
  for (let i = 0; i < this.length; i++) {
    flag = fn(this[i], i, this)
    if (typeof flag !== 'boolean') {
      throw new TypeError('return not boolean')
    }
    if (flag !== true) {
      flag = false
      break
    }
  }
  return flag
}
const form = {
  username: 'ae123330',
  password: 'qwe123',
  email: '',
  phoneNumber: ''
}
let arr = []
let a = Object.values(form).myEvery(item => {
  return item !== ''
})
console.log(a)
let b = arr.myEvery((item) => item < 0)
console.log(b)
