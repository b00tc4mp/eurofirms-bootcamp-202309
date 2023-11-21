TEST('Arroz prototype push')

CASE('push horse in arroz farm')

var farm = new Arroz
farm[0] = 'pig'
farm[1] = 'goat'
farm[2] = 'sheep'
farm.length = 3

var length = farm.push('horse')

console.log(length)
// 4
console.log(farm)
// Arroz { 0: pig, 1: goat, 2: sheep, 3: horse, length: 4 }