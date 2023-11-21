console.log('TEST includes')

console.log('CASE check array [10, 20, 30, 40, 50] includes 40')

var nums = [10, 20, 30, 40, 50]

var exists = includes(nums, 40)

console.log(exists)
// true

console.log('CASE check array [10, 20, 30, 40, 50] includes 60')

var nums = [10, 20, 30, 40, 50]

var exists = includes(nums, 60)

console.log(exits)
//true

console.log('CASE check array [cat dog lion tiger monkey snake horse] includes tiger')

var animals = ['cat', 'dog', 'tiger', 'monkey', 'snake', 'horse']

var exits = includes(animals, 'tiger')

console.log(exists)
//false

console.log('CASE example use function includes')

var numbers = [1, 2, 3, 4, 5]
var searchNumber = 3

console.log("Comprobando si el número", searchNumber, "está en el array")

var numberIncluded = includes(numbers, searchNumber)

if (numberIncluded) {
    console.log("El número", searchNumber, "está en el array")
} else {
    console.log("El número", searchNumber, "no está en el array")
}