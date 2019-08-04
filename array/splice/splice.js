// splice 用法

// Array.splice()
// 必填:第一个参数为index(元素下标)
// 必填:第二个参数为howMany(删除元素的个数,如果为0,则不会删除)
// 可填:第三个参数为 items(新添加的元素) 可以是多个

// let arr = [1, 2, 3, 4]

// 把 2和3 删除

// arr.splice(1, 2) // 2 3

// console.log(arr) // 1, 4

// let arr1 = ['a', 'b', 'c', 'd']

// 把c,d 删除 另外添加一个z和s

// arr1.splice(2, 2, 'z', 's') // 删除 c d 添加z和s

// console.log(arr1)

// leetCode题目

// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

export default (str) => {
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let comp = []
  let attr = str.split('')
  attr.forEach(item => {
    if (map[item]) {
      comp.push(map[item])
    }
  })
  let code = (arr) => {
    let attr = []
    for (let i = 0, len = arr[0].length; i < len; i++) {
      for (let j = 0, ten = arr[1].length; j < ten; j++) {
        attr.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0, 2, attr)
    if (arr.length > 1) {
      code(arr)
    } else {
      return attr
    }
    return arr[0]
  }
  return code(comp)
}
