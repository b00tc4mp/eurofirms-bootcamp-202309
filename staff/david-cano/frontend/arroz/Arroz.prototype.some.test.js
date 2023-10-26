TEST('Arroz prototype some');

CASE('Example use function some');

var numbersSome = new Arroz;
numbersSome[0] = 1;
numbersSome[1] = 2;
numbersSome[2] = 3;
numbersSome[3] = 4;
numbersSome[4] = 5;
numbersSome[5] = 6;
numbersSome.length = 6;

// Definimos una función de devolución de llamada que verifica si un número es par.
function inside(element) {
    return element % 2 === 0;
}

console.log('Comprobando si al menos un número es par en el nuevo objeto numbersSome: {1, 2, 3, 4, 5, 6}');

// Llamamos a la función `some` con el array y la función de devolución de llamada.
var hasEvenNumber = numbersSome.some( inside);

console.log(hasEvenNumber);
//true

CASE('Example II use function some');

var numbersSome = new Arroz;
numbersSome[0] = 1;
numbersSome[1] = 3;
numbersSome[2] = 5;
numbersSome[3] = 7;
numbersSome[4] = 9;
numbersSome[5] = 11;
numbersSome.length = 6;

// Definimos una función de devolución de llamada que verifica si un número es par.
function inside(element) {
    return element % 2 === 0;
}

console.log('Comprobando si al menos un número es par en el nuevo objeto numbersSome: {1, 3, 5, 7, 9, 11}');

// Llamamos a la función `some` con el array y la función de devolución de llamada.
var hasEvenNumber = numbersSome.some( inside);

console.log(hasEvenNumber);
//false

