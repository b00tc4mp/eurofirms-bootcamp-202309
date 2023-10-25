//El método forEach() ejecuta la función indicada una vez por cada elemento del array.

console.log('%cTEST forEach', 'color: magenta; font-weight: bold;')

console.log('CASE print each char from [a, b, c] in console')

var chars = ['a', 'b', 'c']

function printChar(char) {
    console.log(char)
}

forEach(chars, printChar)
// 'a'
// 'b'
// 'c'

console.log('CASE muliply each number from [10, 20, 30] and print it in console'
)

var nums = [10, 20, 30]

forEach(nums, function (num) {
    console.log(num * 100)
})
// 1000
// 2000
// 3000

console.log('CASE print each word with length 4 from [nice, rice, hide, letter, tomato, banana, rain, off, to, from, car]')

var things = ['nice', 'rice', 'hide', 'letter', 'tomato', 'banana', 'rain', 'off', 'to', 'from', 'car']

forEach(things, function (thing) {
    if (thing.length === 4)
        console.log(thing)
})
// nice
// rice
// hide
// rain
// from

console.log('CASE example use function forEach')
// Ejemplo de uso de la función forEach
var colors = ["rojo", "verde", "azul"];

console.log("Recorriendo el array de colores y mostrando cada color:");

// Llamamos a la función forEach con el array "colors" y una función de devolución de llamada que muestra cada color.
forEach(colors, function(color) {
    // La función de devolución de llamada recibe cada elemento del array y lo muestra en la consola.
    console.log(color);
});

// La función forEach termina después de recorrer todo el array y aplicar la función de devolución de llamada a cada elemento.
