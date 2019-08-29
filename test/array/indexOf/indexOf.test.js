import myIndexOf from '../../../array/indexOf/indexOf realize'
describe('indexOf', () => {
  test('indexOf-1', () => {
    let arr = ['bibo', 'tom', 'jack', 'george']
    expect(arr.indexOf('bibo')).toBe(0)
    expect(arr.indexOf('bibo', -1)).toBe(-1)
    expect(arr.indexOf('simon')).toBe(-1)
  })
  test('myIndexOf-1', () => {
    let arr = ['bibo', 'tom', 'jack', 'george']
    expect(myIndexOf.call(arr, 'bibo')).toBe(0)
    expect(myIndexOf.call(arr, 'bibo', -1)).toBe(-1)
    expect(myIndexOf.call(arr, 'simon')).toBe(-1)
  })
})
