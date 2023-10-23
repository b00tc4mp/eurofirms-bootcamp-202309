//El método reverse() invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.

console.log('%cTEST reverse', 'color: magenta; font-weight: bold;')

console.log('CASE reverse array [1, 2, 3]')

// Ejemplo pag documentación
var nums = [1, 2, 3];

console.log(nums); 
// [1, 2, 3]

reverse(nums);

console.log(nums); 
// [3, 2, 1]

console.log('CASE reverse array [a, b, c]')

var chars = ['a', 'b', 'c'];

console.log(chars); 
// [a, b, c]

reverse(chars);

console.log(chars); 
// [c, b, a]

console.log('CASE reverse array [a, b, c, 1, 2, 3]')

var  items= ['a', 'b', 'c', 1, 2, 3];

console.log(items); 
// [a, b, c, 1, 2, 3]

reverse(items);

console.log(items); 
// [3, 2, 1, c, b, a]

console.log('CASE example use function reverse')
// Ejemplo de uso de la función reverse
var numbers = [1, 2, 3, 4, 5, 6];

console.log("Invertir el array:");

// Llamamos a la función reverse con el array "numbers".
var reversedNumbers = reverse(numbers);

// Mostramos el array invertido.
console.log("Array invertido:", reversedNumbers);
