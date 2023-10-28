TEST('shift')
//El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
CASE('delete the first element of the array [a, b, c, d, e,] and return it')
//declaramos una variable chars
var chars = ['a', 'b', 'c', 'd', 'e']
//declaramos otra variable donde llamamos al método shift
var deletedElement = shift(chars)
console.log(deletedElement)
//a
console.log(chars)
//['b','c', 'd', 'e']