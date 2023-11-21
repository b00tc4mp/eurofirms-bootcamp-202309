TEST('Arroz prototype pop')

CASE('pop tomato from arroz plants')

const plants = new Arroz

plants[0] = 'brocoli'
plants[1] = 'brocoli'
plants[2] = 'brocoli'
plants[3] = 'brocoli'
plants[4] = 'brocoli'

plants.length = 5

const extracted = plants.pop()

console.log(extracted)

// tomato

console.log(plants)

// Arroz {list and length}
