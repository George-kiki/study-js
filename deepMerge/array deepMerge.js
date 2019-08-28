function deepMerge (arr) {
  let result = [] // 创建一个新数组
  arr.forEach(item => { // 遍历拷贝的数组
    if (Array.isArray(item)) { // 判断数组中的元素是否还是数组
      result.push(deepMerge(item)) // 还是数组则再次调用拷贝方法
    } else {
      result.push(item) // 元素不是数组添加到新数组中
    }
  })
  return result // 返回拷贝的新数组
}
function arg (arr) { // 数组扁平化
  return arr.reduce((a, b) => Array.isArray(b) ? a.concat(arg(b)) : a.concat(b), [])
}
let arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]
let brr = deepMerge(arr)
arr[3][3][2] = 11
console.log(arg(brr))
console.log(brr)
console.log(arr)
