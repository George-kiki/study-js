// every 用法
/* Array.every(callback)
*callback(ele, index, array)
* ele 是用于当前测试的值
*index 当前测试值的下标
*array 调用every方法的数组
*
*返回值是Boolean 不是true则是false
*
* 如果传入的是空数组直接返回true
*
* Array.every(callback) and Array.some(callback)
* 区别是 Array.every 从数组下标0开始遍历 遇到不满足条件则马上返回false 否则返回true
* 而Array.some(callback) 从数组下标0开始遍历 遇到满足条件的马上返回true 否则返回false
*
* */

/*
* @Array.every(callback)习题
* 假设一个form表单的数据需要提交时判断表单里的任何一条数据都不能为空 如果有空的数据则提示用户
* */

const form = {
  username: 'ae123330',
  password: 'qwe123',
  email: '1',
  phoneNumber: '1'
}
// Object.values(form).every(item => item !== '') // false

let arr = Object.values(form)
function everys (arr) {
  let flag
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '') {
      console.log(arr[i])
      flag = false
      break
    } else {
      flag = true
    }
  }
  return flag
}

console.log(everys(arr))
