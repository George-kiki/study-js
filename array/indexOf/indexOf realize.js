/**
 * @Array.indexOf(findEle, fromIndex) 源码实现
 * */

// eslint-disable-next-line no-extend-native
Array.prototype.myIndexOf = function (findEle, fromIndex) {
  let index = null
  fromIndex = fromIndex || 0
  if (fromIndex >= this.length) {
    return -1
  }
  if (fromIndex < 0) {
    fromIndex = fromIndex + this.length
  }
  for (let i = fromIndex; i < this.length; i++) {
    if (findEle === this[i]) {
      index = i
      break
    } else {
      index = -1
    }
  }
  return index
}

let arr = ['bibo', 'tom', 'jack', 'george']

let notIndex = arr.myIndexOf('jack', -1)
let index = arr.myIndexOf('george')
let notEle = arr.myIndexOf('tim')
console.log(index) // 3
console.log(notEle) // -1
console.log(notIndex) // -1
