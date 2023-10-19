//El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

console.log('%cTEST includes', 'color: magenta; font-weight: bold;')

console.log('CASE check array [10, 20, 30, 40, 50] includes 40')

var nums = [10, 20, 30, 40, 50]

var exists = includes(nums, 40)

console.log(exists)
// true

console.log('CASE check array [10, 20, 30, 40, 50] includes 60')

var nums = [10, 20, 30, 40, 50]

var exists = includes(nums, 60)

console.log(exists)
// false

console.log('CASE check array [cat, dog, lion, tiger, monkey, snake, horse] includes tiger')

var animals = ['cat', 'dog', 'lion', 'tiger', 'monkey', 'snake', 'horse']

var exists = includes(animals, 'tiger')

console.log(exists)
// true

console.log('CASE check array [cat, dog, lion, tiger, monkey, snake, horse] includes elephant')

var animals = ['cat', 'dog', 'lion', 'tiger', 'monkey', 'snake', 'horse']

var exists = includes(animals, 'elephant')

console.log(exists)
// false

console.log('CASE example use function includes')
// Ejemplo de uso de la función includes
var numbers = [1, 2, 3, 4, 5];
var searchNumber = 3;

console.log("Comprobando si el número", searchNumber, "está en el array:");

// Llamamos a la función includes con el array "numbers" y el número "searchNumber".
var numberIncluded = includes(numbers, searchNumber);

// Mostramos el resultado de la búsqueda.
if (numberIncluded) {
    console.log("El número", searchNumber, "está en el array.");
} else {
    console.log("El número", searchNumber, "no está en el array.");
}
