TEST('Arroz prototype join')

CASE('Return the string from animals')

const animalsA = new Arroz

animalsA[0] = 'tiger'
animalsA[1] = 'lion'
animalsA[2] = 'cat'

animalsA.length = 3

const animalsAString = animalsA.join()

console.log(animalsAString)

CASE('Return the string pather-jaguar-leopard from animals')

var animalsB = new Arroz

animals[0] = 'panther'
animals[1] = 'jaguar'
animals[2] = 'leopard'

animalsB.length = 3

const animalsBString = animalsB.join('-')

console.log(animalsBString)
// panther-jaguar-leopard