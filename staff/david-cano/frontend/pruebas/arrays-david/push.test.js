//El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

console.log('%cTEST push', 'color: magenta; font-weight: bold;')

console.log('CASE push horse in array [pig, goat, sheep]')

var farm = ['pig', 'goat', 'sheep']

var length = push(farm, 'horse')

console.log(length)
// 4
console.log(farm)
// [pig, goat, sheep, horse]