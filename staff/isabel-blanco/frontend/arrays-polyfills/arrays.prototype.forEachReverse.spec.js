TEST("Array prptotype forEachReverse")

CASE('Print chars in reverse way')

var chars = ['A', 'B', 'C']

chars.forEachReverse(function (char) {
    console.log(char)
})

// A
// B
// C

CASE('Print nums in reverse way multiplied by 10')

var nums = [10, 20, 30]

nums.forEachReverse(function (num) {
    console.log(num * 10)
})

// 300
// 200
// 100