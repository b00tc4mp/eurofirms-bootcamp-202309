TEST('Arroz prototype pop')

CASE('pop tomato from arroz plants')

const plants = new Arroz
plants[0] = 'broccoli'
plants[1] = 'cauliflower'
plants[2] = 'cabbage'
plants[3] = 'kale'
plants[4] = 'tomato'
plants.length = 5

var extracted = plants.pop()

console.log(extracted)
// tomato

console.log(plants)
// Arroz { 0: broccoli, 1: cauliflower, 2: cabbage, 3: kale, length: 4 }