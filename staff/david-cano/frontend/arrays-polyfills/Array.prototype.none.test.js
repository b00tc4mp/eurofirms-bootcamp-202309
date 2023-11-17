TEST('Array prototype none')

CASE('check no words have length greater than 8 chars in names')

var names = ['jonatan', 'isabel', 'david', 'eileen', 'elena', 'katherine']

var result = names.none(function (name) {
    return name.length > 8
})

console.log(result)
// false

CASE('check no numbers are multiples of 11')

var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

var result = numbers.none(function (number) {
    var remainder = number % 11

    return remainder === 0
})

console.log(result)
// true

CASE('check there are numbers thar are multiples of 11')

var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]

var result = numbers.none(function (number) {
    var remainder = number % 11

    return remainder === 0
})

console.log(result)
// false