import mySlice from '../../../array/slice/slice realize'
describe('slice', () => {
  test('slice-1', () => {
    let arr = [1, 2, 3, 4, 5, 6]
    expect(arr.slice(0, 1)).toEqual([1])
    expect(arr.slice(-3, -1)).toEqual([4, 5])
    expect(arr.slice(2)).toEqual([3, 4, 5, 6])
    expect(arr.slice(-2)).toEqual([5, 6])
  })
  test('slice-2', () => {
    function add (...arg) {
      return Array.prototype.slice.call(arguments, 1)
    }
    expect(add('a', 'b', 'c', 'd')).toEqual(['b', 'c', 'd'])
  })
  test('mySlice-1', () => {
    let arr = [1, 2, 3, 4, 5, 6]
    expect(mySlice.call(arr, 0, 1)).toEqual([1])
    expect(mySlice.call(arr, -3, -1)).toEqual([4, 5])
    expect(mySlice.call(arr, 2)).toEqual([3, 4, 5, 6])
    expect(mySlice.call(arr, -2)).toEqual([5, 6])
  })
  test('mySlice-2', () => {
    function add (...arg) {
      return mySlice.call(arguments, 1)
    }
    expect(add('a', 'b', 'c', 'd')).toEqual(['b', 'c', 'd'])
  })
})
