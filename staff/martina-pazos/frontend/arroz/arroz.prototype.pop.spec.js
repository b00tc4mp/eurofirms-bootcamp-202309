TEST('pop')
//El método pop() elimina el último elemento de un array y lo devuelve.Este método cambia la longitud del array.
CASE('pop tomato from array [broccoli, cauliflower, cabbage, kale, tomato]')
// declaramos una variable (plants) con todos los elementos de la array 
var plants = new Arroz
plants[0] = 'broccoli'
plants[1] = 'cauliflower'
plants[2] = 'cabbage'
plants[3] = 'kale'
plants[4] = 'tomato'
plants.length = 5

var extracted = plants.pop()

console.log(extracted)
//tomato

console.log(plants)
//Arroz {0:broccoli, 1:cauliflower, 2:cabbage, 3:kale, 4:length}





