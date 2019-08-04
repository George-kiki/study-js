// join方法使用
/**
* Array.join(string)
*传入分隔字符，将数组将转变成带传入分隔符的字符串字符串
*如['G', 'e', 'o', 'r', 'g', 'e'].join('-')
*"G-e-o-r-g-e"
*
* */

/**
 * leetCode题目
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * 示例 1:
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc"
 * */

let str = "Let's take LeetCode contest"

function arrayJoin (str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ')
}

arrayJoin(str)// s'teL ekat edoCteeL tsetnoc


