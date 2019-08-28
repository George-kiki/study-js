/**
 * 其实深拷贝可以拆分成 2 步，浅拷贝 + 递归，浅拷贝时判断属性值是否是对象，如果是对象就进行递归操作，两个一结合就实现了深拷贝。
 * */
const toString = Object.prototype.toString

function isPlainObject (val) { // 判断是否为Object
  return toString.call(val) === '[object Object]'
}

function deepMerge (obj) {
  if (!isPlainObject(obj)) { // 判断拷贝对象是否为Object
    throw new TypeError('argument not Object ')
  }
  let result = {}
  for (let key in obj) { // 遍历对象中的key
    if (Object.prototype.hasOwnProperty.call(obj, key)) { // 判断每一个Key是否为obj对象的Key
      if (isPlainObject(obj[key])) { // 判断value是否为对象
        result[key] = deepMerge(obj[key]) // 递归调用
      } else {
        result[key] = obj[key] // 添加到新对象中
      }
    }
  }
  return result // 返回新对象
}
let obj = {
  a: 1,
  b: {
    three: 2,
    two: {
      one: 4
    }
  }
}
let deepObject = deepMerge(obj)
obj.b.two.one = 8
console.log(obj) // { a: 1, b: { three: 2, two: { one: 8 } } }
console.log(deepObject) // { a: 1, b: { three: 2, two: { one: 4 } } }
