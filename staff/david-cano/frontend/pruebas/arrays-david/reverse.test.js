console.log('%cTEST reverse', 'color: magenta; font-weight: bold;')

console.log('CASE reverse array [1, 2, 3]')

// Ejemplo pag documentación
var reverse = [1, 2, 3];

console.log(reverse); 
// [1, 2, 3]

reverse.reverse();

console.log(reverse); 
// [3, 2, 1]

console.log('CASE reverse array [a, b, c]')

var reverse = ['a', 'b', 'c'];

console.log(reverse); 
// [a, b, c]

reverse.reverse();

console.log(reverse); 
// [c, b, a]

console.log('CASE reverse array [a, b, c, 1, 2, 3]')

var reverse = ['a', 'b', 'c', 1, 2, 3];

console.log(reverse); 
// [a, b, c, 1, 2, 3]

reverse.reverse();

console.log(reverse); 
// [3, 2, 1, c, b, a]

