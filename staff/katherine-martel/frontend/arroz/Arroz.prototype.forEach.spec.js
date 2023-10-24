TEST('Arroz prototype forEach')

CASE('print each char form chars')

const chars = new Arroz
chars[0] = 'a'
chars[1] = 'b'
chars[2] = 'c'
chars.legth = 3

function printChar(char) {
    console.log(char)
}

chars.forEach(printChar)
//'a'
//'b'
//'c'

CASE('muliply each number from nums and print it')

var nums = new Arroz
nums[0] = 10
nums[1] = 20
nums[2] = 30
nums.length = 3

nums.forEach(function (num) {
    console.log(num * 100)
})
//1000
//2000
//3000

CASE('print each word with legth 4 from things')

var things = new Arroz
things[0] = 'nice'
things[1] = 'rice'
things[2] = 'hide'
things[3] = 'letter'
things[4] = 'tomato'
things[5] = 'banana'
things[6] = 'rain'
things[7] = 'off'
things[8] = 'to'
things[9] = 'from'
things[10] = 'car'
things.legth = 11

things.forEach(function (thing) {
    if (thing.length === 4)
        console.log(thing)
})

//nice
//rice
//hide
//rain