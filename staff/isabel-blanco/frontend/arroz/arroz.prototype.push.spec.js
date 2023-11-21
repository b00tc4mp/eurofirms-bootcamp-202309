TEST('Arroz prototype push')

CASE('Push dog in arroz farm')

const farm = new Arroz

farm[0] = 'pig'
farm[1] = 'goat'
farm[2] = 'sheep'

farm.length = 3

const length = farm.push('dog')

console.log(length)

// 4

console.log(farm)

// Arroz {list with length}