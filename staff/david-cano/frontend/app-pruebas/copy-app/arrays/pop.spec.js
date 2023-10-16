//El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

console.log('%cTEST pop', 'color: magenta; font-weight: bold;')

console.log('CASE pop tomato from array [broccoli, cauliflower, cabbage, kale, tomato]')

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

var extracted = pop(plants)

console.log(extracted)
// tomato

console.log(plants)
// [broccoli, cauliflower, cabbage, kale]