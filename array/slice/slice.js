// slice用法
/**
 * Array.slice(start , end)
 * start 从数组的第几个开始 默认为0 如果大于原数组的长度则返回空数组 如果为负数则从数组的倒数第几个元素开始
 *
 * end 从数组的第几个终止 不包含第end元素 如果为负数则从数组的倒数几个结束 不包含结束下标元素 如果大于原数组的长度则取到数组末尾
 *
 * 返回一个新的数组 所以通常这个方法也会被用到为数组转换真数组
 * */

/**
 * Array.slice() 练习题
 *  手写call方法实现
 *
 * */

// eslint-disable-next-line no-extend-native
Function.prototype.myCall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('not function')
  }
  context = context || window
  context.fn = this
  let result
  let arg = [...arguments].slice(1)
  result = context.fn(...arg)
  delete context.fn
  return result
}
