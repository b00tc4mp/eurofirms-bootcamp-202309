console.log('%cTEST includes', 'color: magenta; font-weight: bold;')

console.log('CASE check array [10, 20, 30, 40, 50] includes 40')

var nums = [10, 20, 30, 40, 50]

var exists = includes(nums, 40)

console.log(exists)
// true

console.log('CASE check array [10, 20, 30, 40, 50] includes 60')

var nums = [10, 20, 30, 40, 50]

var exists = includes(nums, 60)

console.log(exists)
// false

console.log('CASE check array [cat, dog, lion, tiger, monkey, snake, horse] includes tiger')

var animals = ['cat', 'dog', 'lion', 'tiger', 'monkey', 'snake', 'horse']

var exists = includes(animals, 'tiger')

console.log(exists)
// true

console.log('CASE check array [cat, dog, lion, tiger, monkey, snake, horse] includes elephant')

var animals = ['cat', 'dog', 'lion', 'tiger', 'monkey', 'snake', 'horse']

var exists = includes(animals, 'elephant')

console.log(exists)
// false

