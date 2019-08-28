/**
 * Function.call(thisArg, arg1, arg2, ...)
 * 运行call时指定的this值, 如果为空指向浏览器的widow对象
 * (arg1, arg2, ....) call的参数列表
 * call() 使用指定的一个this值和单独给出的一个参数或者多个参数来调用一个函数
 * */

/**
 * 使用案例
 * 1. 利用slice返回新数组的功能将伪数组转数组
 * */
let node // 某个页面的父容器
// Array.prototype.slice.call(node.childNodes) // 父容器里的所有节点元素(包括文本节点和元素节点), childNodes拿到的是伪(类)数组 通过这个方法可以将伪(类)数组转为真数组
/**
 * Array.prototype.slice.call 可以将带length属性的对象转为数组 有兴趣的可以去array文件下的slice realize看看slice的实现
 * */
var aBoy = 'John' // var全局变量是挂在浏览器的window对象下面的
let boy = {
  name: 'Tim'
}

function name () {
  console.log(this.name) // 此时this指向的是浏览器的window对象
}

console.log(name()) // 浏览器环境(John) node环境(undefined)
let bBoy = name.call(boy) // 利用call改变了name函数的this指向
/**
 * boy = {
 *   name: 'Tim',
 *   fn: function() {
 *    this.name
 * }
 * */
console.log(bBoy) // Tim
