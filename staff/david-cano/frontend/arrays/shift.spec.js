//El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

console.log('%cTEST shift', 'color: magenta; font-weight: bold;')

console.log('CASE delete the first element of the array [a, b, c, d, e] and return it')

var chars = ['a', 'b', 'c', 'd', 'e']
var deletedElement = shift(chars)

console.log(deletedElement)
//a

console.log(chars)
//['b', 'c', 'd', 'e']

console.log('CASE example use function shift')
// Ejemplo de uso de la función shift
var fruits = ["manzana", "banana", "cereza", "uva"];

console.log("Eliminando el primer elemento del array:");

// Llamamos a la función shift con el array "fruits".
var deletedFruit = shift(fruits);

// Mostramos el elemento eliminado.
console.log("Elemento eliminado:", deletedFruit);

// Mostramos el array actualizado después de eliminar el primer elemento.
console.log("Array actualizado:", fruits);

