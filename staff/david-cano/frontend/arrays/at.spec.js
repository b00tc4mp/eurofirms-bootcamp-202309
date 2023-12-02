//El método at() recibe un valor numérico entero y devuelve el elemento en esa posición, permitiendo valores positivos y negativos. Los valores negativos contarán desde el último elemento del array.

console.log('%cTEST at', 'color: magenta; font-weight: bold;')

console.log('CASE return element in index 0 from array [10, 20, 30]')

var a = [10, 20, 30]

var element = at(a, 0)

console.log(element)
// 10

console.log('CASE return element in index 1 from array ["a", "b", "c"]')

var a = ['a', 'b', 'c']

var element = at(a, 1)

console.log(element)
// 'b'

console.log('CASE return element in index 4 from array [true, false, true, true, false, false]')

var a = [true, false, true, true, false, false]

var element = at(a, 4)

console.log(element)
// false

console.log('CASE example use function at')
// Ejemplo de uso de la función at
var fruits = ["manzana", "banana", "cereza", "uva"];
var indexToAccess = 1;

console.log("Obtener el elemento en la posición", indexToAccess, "del arreglo:");

// Llamamos a la función at con el arreglo "fruits" y el índice "indexToAccess".
var elementAtIndex = at(fruits, indexToAccess);

// Mostramos el elemento obtenido en la posición especificada.
console.log("Elemento en la posición", indexToAccess, ":", elementAtIndex);
