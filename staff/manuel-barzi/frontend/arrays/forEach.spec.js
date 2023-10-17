console.log('%cTEST forEach', 'color: magenta; font-weight: bold;')

console.log('CASE print each char from [a, b, c] in console')

var chars = ['a', 'b', 'c']

function printChar(char) {
    console.log(char)
}

forEach(chars, printChar)
// 'a'
// 'b'
// 'c'

console.log('CASE muliply each number from [10, 20, 30] and print it in console')

var nums = [10, 20, 30]

forEach(nums, function (num) {
    console.log(num * 100)
})
// 1000
// 2000
// 3000

console.log('CASE print each word with length 4 from [nice, rice, hide, letter, tomato, banana, rain, off, to, from, car]')

var things = ['nice', 'rice', 'hide', 'letter', 'tomato', 'banana', 'rain', 'off', 'to', 'from', 'car']

forEach(things, function (thing) {
    if (thing.length === 4)
        console.log(thing)
})
// nice
// rice
// hide
// rain
// from