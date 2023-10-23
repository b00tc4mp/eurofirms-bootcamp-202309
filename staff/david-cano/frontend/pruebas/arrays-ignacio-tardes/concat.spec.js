//El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

console.log('%cTEST concat', 'color: magenta; font-weight: bold;')

console.log('CASE concat arrays ["a", "b", "c"] and ["d", "e", "f"]')

var chars1 = ['a', 'b', 'c']
var chars2 = ['d', 'e', 'f']

var chars3 = concat(chars1, chars2)

console.log(chars3)
// ['a', 'b', 'c', 'd', 'e', 'f']

console.log('CASE concat arrays [10, 20, 30] and [40, 50]')

var nums1 = [10, 20, 30]
var nums2 = [40, 50]

var nums3 = concat(nums1, nums2)

console.log(nums3)
// [10, 20, 30, 40, 50]

console.log('CASE example use function concat')
// Ejemplo de uso de la función concat
var fruits1 = ["manzana", "banana"];
var fruits2 = ["cereza", "uva"];

console.log("Concatenar dos arreglos de frutas:");

// Llamamos a la función concat con los dos arreglos "fruits1" y "fruits2".
var concatenatedFruits = concat(fruits1, fruits2);

// Mostramos el arreglo resultante de la concatenación.
console.log("Arreglo concatenado:", concatenatedFruits);
