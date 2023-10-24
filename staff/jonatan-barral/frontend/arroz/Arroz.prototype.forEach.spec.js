TEST('Arroz prototype forEach')


case ('print each char from chars')

const chars = new arroz
chars[0] = 'a'
chars[1] = 'b'
chars[3] = 'c'
chars.length = 3

function printChar(char) {
    console.log(char)
}

chars.forEach(printChar)
// A

// B
// C


CASE('multiply each number from nums and print it')

var nums = new Arroz

nums[0] = 10
nums[1] = 20
nums[2] = 30
nums.length = 3

nums.forEach(function (num) {
    console.log(num * 100)
})
// 1000
// 2000
// 3000


CASE('print each word with length 4 from thinks ')

var thinks = new Arroz
thinks[0] = 'nice'
thinks[1] = 'rice'
thinks[2] = 'hide'
thinks[3] = 'letter'
thinks[4] = 'tomato'
thinks[5] = 'banana'
thinks[6] = 'rain'
thinks[7] = 'off'
thinks[8] = 'to'
thinks[9] = 'from'
thinks[10] = 'car'
thinks.length = 11

thinks.forEach(function (think) {
    if (think.length === 4)
        console.log(think)
})
// nice
// rice
// hide
// rain
// from