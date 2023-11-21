TEST('Arroz prototype shift')

CASE('Delete the first element of the chars and return it')

const charsSihft = new Arroz

charsSihft[0] = 'a'
charsSihft[1] = 'b'
charsSihft[2] = 'c'
charsSihft[3] = 'd'
charsSihft[4] = 'e'

charsSihft.length = 5

const deletedElement2 = charsSihft.shift()

console.log(deletedElement2)
// a

console.log(charsSihft)
// {0:b, 1:c, 2:d, 3:e}