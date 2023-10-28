TEST('lastIndexOF')
// El método lastIndexOf() devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo, ó -1 si el elemento no se encontrara. El arreglo es recorrido en sentido contrario, empezando por el índice fromIndex.
CASE('return last index of 20 on array [10, 20, 30, 40, 20,50]')
// declaramos la variable
var nums = [10, 20, 30, 40, 20, 50]
// declaramos una nueva variable llamando al método lastIndexOf
var index = lastIndexOf(nums, 20)
console.log(index)
//4

CASE('returns -1 when not foun 60 on array [10, 20, 30, 40,20, 50,')
var nums = [10, 20, 30, 40, 20, 50]
var index = lastIndexOf(nums, 60)
console.log(index)
//-1

