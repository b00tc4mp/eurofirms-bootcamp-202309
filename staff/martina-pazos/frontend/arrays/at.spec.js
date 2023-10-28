// vamos a darle color y tamaño para que se vea en la consola
console.log('%cTEST at', 'color: magenta; font-weight: bold; font-size:20px')
//vamos a usar el método att. El método at() recibe un valor numérico entero y devuelve el elemento en esa posición, permitiendo valores positivos y negativos. Los valores negativos contarán desde el último elemento del array.


CASE('return element in index 0 from array [10, 20, 30]')

var nums = [10, 20, 30]

var element = at(nums, 0)

console.log(element)
// 10

CASE('return element in index 1 from array [a, b, c]')

var chars = ['a', 'b', 'c']

var element = at(chars, 1)

console.log(element)
// 'b'

CASE('return element in index 4 from array [true, false, true, true, false, false]')

var booleans = [true, false, true, true, false, false]

var element = at(booleans, 4)

console.log(element)
// false

CASE('return element in index -2 from array [10, 20, 30]')

var nums = [10, 20, 30]

var element = at(nums, -2)

console.log(element)
// 20

CASE('return element in index -1 from array [a, b, c]')

var chars = ['a', 'b', 'c']

var element = at(chars, -1)

console.log(element)
// 'c'