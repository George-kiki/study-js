import mySome from '../../../array/some/some realize'
describe('some', () => {
  test('some-1', () => {
    let arr = [1, 2, 3]
    expect(arr.some((item) => {
      return item > 1
    })).toBeTruthy()
  })
  test('some-2', () => {
    const form = {
      username: '1',
      password: '1',
      email: '',
      phoneNumber: '1'
    }
    expect(Object.values(form).some((item) => {
      return item === ''
    })).toBeTruthy()
  })
  test('some-3', () => {
    const form = {
      username: '',
      password: '',
      email: '',
      phoneNumber: ''
    }
    expect(Object.values(form).some((item) => {
      return item !== ''
    })).toBeFalsy()
  })
  test('mySome-1', () => {
    let arr = [1, 2, 3]
    expect(mySome.call(arr, (item) => {
      return item > 1
    })).toBeTruthy()
  })
  test('mySome-2', () => {
    const form = {
      username: '1',
      password: '1',
      email: '',
      phoneNumber: '1'
    }
    expect(mySome.call(Object.values(form), (item) => {
      return item === ''
    })).toBeTruthy()
  })
  test('mySome-3', () => {
    const form = {
      username: '',
      password: '',
      email: '',
      phoneNumber: ''
    }
    expect(mySome.call(Object.values(form), (item) => {
      return item !== ''
    })).toBeFalsy()
  })
})
