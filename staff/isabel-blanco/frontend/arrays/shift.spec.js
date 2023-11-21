console.log('TEST shift')

console.log('CASE delete the first element of the array [a, b, c, d, e] and return it')

var chars = ['a', 'b', 'c', 'd', 'e']
var deletedElement = shift(chars)

console.log(deletedElement)
//a

//['b','c','d','e']

console.log('CASE example use function shift')

var fruits = ["manazana", "banana", "cereza", "uva"]

console.log("Eliminando el primer elemento del array:");

var deletedFruit = shift(fruits)

console.log("Elemento eliminado", deletedFruit)

console.log("Array actualizada:", fruits)