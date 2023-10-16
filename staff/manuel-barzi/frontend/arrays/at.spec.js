console.log('%cTEST at', 'color: magenta; font-weight: bold;')

console.log('CASE return element in index 0 from array [10, 20, 30]')

var nums = [10, 20, 30]

var element = at(nums, 0)

console.log(element)
// 10

console.log('CASE return element in index 1 from array [a, b, c]')

var chars = ['a', 'b', 'c']

var element = at(chars, 1)

console.log(element)
// 'b'

console.log('CASE return element in index 4 from array [true, false, true, true, false, false]')

var booleans = [true, false, true, true, false, false]

var element = at(booleans, 4)

console.log(element)
// false

console.log('CASE return element in index -2 from array [10, 20, 30]')

var nums = [10, 20, 30]

var element = at(nums, -2)

console.log(element)
// 20

console.log('CASE return element in index -1 from array [a, b, c]')

var chars = ['a', 'b', 'c']

var element = at(chars, -1)

console.log(element)
// 'c'