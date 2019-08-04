// some 用法
/*
* Array.some(callback)
*callback(ele, index, array)
* ele 是用于当前测试的值
* index 当前测试值的下标
* array 调用every方法的数组
* 遇到满足条件的马上返回true 不满足则遍历整个数组返回false
*
* 返回值是Boolean 不是true则是false
*
* Array.every(callback) and Array.some(callback)
* 区别是 Array.every 从数组下标0开始遍历 遇到不满足条件则马上返回false 否则返回true
* 而Array.some(callback) 从数组下标0开始遍历 遇到满足条件的马上返回true 否则返回false
*
*
* */

/*
* @Array.every(callback)习题
* 假设一个form表单的数据需要提交时判断表单里的任何一条数据都不能为空 如果有空的数据则提示用户
* */
const form = {
  username: '1',
  password: '1',
  email: '1',
  phoneNumber: '1'
}
let b = Object.values(form).some(item => {
  return item === ''
})
console.log(b)
