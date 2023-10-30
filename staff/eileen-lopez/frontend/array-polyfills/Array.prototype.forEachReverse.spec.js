TEST('Array prototype forEachReverse')

CASE('print chars in reverse way')

var chars = ['A', 'B', 'C']

chars.forEachReverse(function (char){
    console.log(char)
})
//C
//B
//A

CASE('print nums in reverse order multiplied by 10')

var nums = [10, 20, 30]

nums.forEachReverse(function (num) {
    console.log(num * 10)
})
//300
//200
//100