import myReduce from '../../../array/reduce/reduce realize'
describe('reduce', () =>{
  test('reduce-1', () => {
    const arr = [5, 6, 7, 8, 9]
    expect(arr.reduce((prev, next) => prev + next)).toBe(35)
  })
  test('reduce-2', () => {
    const arr = [[1, 2, 3, [4, 5, 6, [7, 8, 9, [10]]]]]
    function reg (arr) {
      return arr.reduce((prev, next) => Array.isArray(next) ? prev.concat(reg(next)) : prev.concat(next), [])
    }
    expect(reg(arr))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  test('reduce-3', () => {
    const node = {
      name: 'Tim',
      list: {
        text: 111
      }
    }
    let directive = 'list.text'
    function compileDirective (text, vm) {
      text = text.split('.')
      return text.reduce((prev, next) => prev[next], vm)
    }
    expect(compileDirective(directive, node)).toBe(111)
  })
  test('reduce-4', () => {
    let deckCard1 = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 1]
    let deckCard2 = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]
    let hasGroupsSizeX = (deck) => {
      let gcb = (...arr) => {
        let _gcb = (x, y) => !y ? x : gcb(y, x % y)
        return [...arr].reduce((x, y) => _gcb(x, y))
      }
      let obj = Object.create(null)
      deck.forEach(v => {
        obj[v] ? obj[v]++ : obj[v] = 1
      })
      let arr = Object.values(obj)
      return gcb(...arr) !== 1
    }
    expect(hasGroupsSizeX(deckCard1)).toBeFalsy()
    expect(hasGroupsSizeX(deckCard2)).toBeTruthy()
  })
  /*************/
  test('myReduce-1', () => {
    const arr = [5, 6, 7, 8, 9]
    expect(myReduce.call(arr, (prev, next) => prev + next)).toBe(35)
  })
  test('myReduce-2', () => {
    const arr = [[1, 2, 3, [4, 5, 6, [7, 8, 9, [10]]]]]
    function reg (arr) {
      return myReduce.call(arr, (prev, next) => Array.isArray(next) ? prev.concat(reg(next)) : prev.concat(next), [])
    }
    expect(reg(arr))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  test('myReduce-3', () => {
    const node = {
      name: 'Tim',
      list: {
        text: 111
      }
    }
    let directive = 'list.text'
    function compileDirective (text, vm) {
      text = text.split('.')
      return myReduce.call(text, (prev, next) => prev[next], vm)
    }
    expect(compileDirective(directive, node)).toBe(111)
  })
  test('myReduce-4', () => {
    let deckCard1 = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 1]
    let deckCard2 = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]
    let hasGroupsSizeX = (deck) => {
      let gcb = (...arr) => {
        let _gcb = (x, y) => !y ? x : gcb(y, x % y)
        return myReduce.call([...arr], (x, y) => _gcb(x, y))
      }
      let obj = Object.create(null)
      deck.forEach(v => {
        obj[v] ? obj[v]++ : obj[v] = 1
      })
      let arr = Object.values(obj)
      return gcb(...arr) !== 1
    }
    expect(hasGroupsSizeX(deckCard1)).toBeFalsy()
    expect(hasGroupsSizeX(deckCard2)).toBeTruthy()
  })
})
