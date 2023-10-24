// le ponemos color para diferenciarlo en la consola
console.log('%cTEST at', 'color: magenta; font-weight: bold;')
//El método at() recibe la posición en la que se encuentra un valor númerico en la array.
console.log('CASE return element in index 0 from array [10, 20, 30]')
// primero creamos la variable
var nums = [10, 20, 30]
// creamos la var elements, para que a través del método at, nos indique el número o elemento que esta en la posicion 0
var element = at(nums, 0)
// el resultado que esperamos es:
console.log(element)
//10