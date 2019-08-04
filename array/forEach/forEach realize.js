/**
 *@Array.forEach(fn) 源码实现
 * */
// eslint-disable-next-line no-extend-native
Array.prototype.myForEach = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this)
  }
}

let arr = [1, 2, 3, 4, 5]
arr.myForEach((item, index, array) => {
  console.log(item, index, array)
})
