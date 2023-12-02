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

console.log('CASE muliply each number from [10, 20, 30] and print it in console')

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

console.log('CASE example function forEach')
// Ejemplo de uso de la función forEach
var numbers = [1, 2, 3, 4];
// Definimos una función de devolución de llamada que imprime cada elemento.
function logElement(element) {
    console.log(element);
}

console.log("Iterando a través del array de números:");
// Paso 5: Llamamos a la función forEach con el array y la función de devolución de llamada.
forEach(numbers, logElement);

// Paso 6: La función forEach itera a través del array, llama a la función de devolución de llamada con cada elemento y termina.
console.log("Iteración finalizada");