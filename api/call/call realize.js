// eslint-disable-next-line no-extend-native
Function.prototype.mycall = function (context) {
  if (typeof this !== 'function') { // 先判断调用着是不是函数
    throw new TypeError('not function')
  }
  context = context || window // 当没用传值或者值为空的时候指向的是window
  context.fn = this // 拿到调用者自身 this = 调用这个api的function
  /*
   let context ={
  a:1,
  fn:function(){
    console.log(this.a)
  }
};
  * */
  let arg = [...arguments].slice(1) // 将第一个参数取出来 {a:1,function:add}
  let result = context.fn(...arg) // 将参数给调用方法体 改变原本的this指向  将this指向传入的参数
  delete context.fn // 删除这个这个方法
  return result // 返回结果
}
