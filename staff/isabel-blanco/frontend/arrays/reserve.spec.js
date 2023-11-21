console.log('TEST reverese')

console.log('CASE reverse array [1, 2, 3]')

var nums = [1, 2, 3]

console.log(nums)
// [1, 2, 3]

reverese(nums)

console.log(nums)
// [3, 2, 1]

console.log('CASE reverse array [a, b, c]')

var chars = ['a', 'b', 'c']

console.log(chars)
// [a, b, c]

reverese(chars)

console.log(chars)
// [c, b, a]

console.log('CASE reverse array [a, b, c, 1, 2, 3]')

var items = ['a', 'b', 'c', 1, 2, 3]

console.log(items)
//[a, b, c, 1, 2, 3]

reverse(items)

console.log(items)
//[3, 2, 1,c ,b ,a]

console.log('CASE example use function reverse')

var numbers = [1, 2, 3, 4, 5, 6]

console.log("Invertir el array:")

var reversedNumbers = reverse(numbers)

console.log("Array invertido:", reversedNumbers)