TEST('pop')
//El método pop() elimina el último elemento de un array y lo devuelve.Este método cambia la longitud del array.
CASE('pop tomato from array [broccoli, cauliflower, cabbage, kale, tomato]')
// declaramos una variable (plants) con todos los elementos de la array 
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
// declaramos otra variable (extracted), donde llamamos al método pop
var extracted = pop(plants)
console.log(extracted)
//tomato
console.log(plants)
//[boccoli, cauliflower, cabbage.kale]



