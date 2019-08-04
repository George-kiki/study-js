/**
 * Array.find(fn(ele, index, array)) 方法实现
 * */

// eslint-disable-next-line no-extend-native
Array.prototype.myFind = function (fn) {
  let result
  for (let i = 0; i < this.length; i++) {
    console.log(this[i])
    if (fn(this[i], i, this)) {
      result = this[i]
      break
    } else {
      result = undefined
    }
  }
  return result
}

let arr = [
  { name: 'simon' },
  { name: 'lisa' },
  { name: 'tim' }
]

console.log(arr.myFind(item => {
  return item.name === 'tim'
}).name)
