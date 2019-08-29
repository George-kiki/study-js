import myEvery from '../../../array/every/every realize'
describe('every', () => {
  test('every-1', () => {
    const arr = [11, 8, 9, 20, 7, 66]
    expect(arr.every(num => num > 8)).toBeFalsy()
  })
  test('every-2', () => {
    const form = {
      username: 'ae123330',
      password: 'qwe123',
      repeatPassword: 'qwe123',
      verificationCode: 'er14'
    }
    expect(Object.values(form).every(item => item !== '')).toBeTruthy()
  })
  test('myEvery-1', () => {
    const arr = [11, 8, 9, 20, 7, 66]
    expect(myEvery.call(arr, num => num > 8)).toBeFalsy()
  })
  test('myEvery-2', () => {
    const form = {
      username: 'ae123330',
      password: 'qwe123',
      repeatPassword: 'qwe123',
      verificationCode: 'er14'
    }
    expect(myEvery.call(Object.values(form), item => item !== '')).toBeTruthy()
  })
})
