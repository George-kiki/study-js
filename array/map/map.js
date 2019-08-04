// map使用方法
/**
 * Array.map(fn(item, index, array)) 遍历数组
 * item 数组中正在处理的当前对象
 * index 数组中正在处理的当前对象索引
 * array 正在操作的数组
 *
 * map方法不可以中断
 * 返回一个新数组
 *
 * map和forEach的区别是
 * map有返回值 返回一个新数组
 * forEach没用返回值
 *
 * */

/**
 * Array.map() 使用
 *
 *leetCode题目
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * 示例 1:
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc"
 *
 * */
let str = 'Let\'s take LeetCode contest'

str.split(' ').map(item => item.split('').reverse().join('')).join(' ')
