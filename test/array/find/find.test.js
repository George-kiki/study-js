import myFind from '../../../array/find/find realize'
describe('find', () => {
  test('find', () => {
    let arr = [
      { name: 'simon' },
      { name: 'lisa' },
      { name: 'tim' }
    ]
    expect(arr.find(item => item.name === 'tim')).toEqual({ name: 'tim' })
    expect(arr.find(item => item.name === 'gg')).toBe(undefined)
  })
  test('myFind', () => {
    let arr = [
      { name: 'simon' },
      { name: 'lisa' },
      { name: 'tim' }
    ]
    expect(myFind.call(arr, item => item.name === 'tim')).toEqual({ name: 'tim' })
    expect(myFind.call(arr, item => item.name === 'gg')).toBe(undefined)
  })
})
