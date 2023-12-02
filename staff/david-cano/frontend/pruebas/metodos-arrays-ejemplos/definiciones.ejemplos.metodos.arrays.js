// Definiciones y ejemplos de métodos de arrays en JavaScript
CASE('PUSH')
console.log('1.-PUSH:  Agrega uno o más elementos al final de un arreglo y devuelve la nueva longitud del arreglo. Eje: var fruits = ["apple", "banana", "cherry"] fruits.push("date");')
console.log('fruits ahora es ["apple", "banana", "cherry", "date"]')

var fruits = ["apple", "banana", "cherry"];
fruits.push("date");
console.log(fruits);


CASE('POP')
console.log('2.-POP: Elimina el último elemento de un arreglo y lo devuelve. Ejem: var fruits2 = ["apple", "banana", "cherry"]; var lastFruit = fruits2.pop();')
console.log('lastFruit es "cherry", fruits2 es ["apple", "banana"] ')

var fruits2 = ["apple", "banana", "cherry"];
var lastFruit = fruits2.pop();
console.log(lastFruit);
console.log(fruits2)


CASE('SHIFT')
console.log('3.-SHIFT: Elimina el primer elemento de un arreglo y lo devuelve. Ejem: var fruits3 = ["apple", "banana", "cherry"]; var firstFruit = fruits3.shift();')
console.log('firstFruit es "apple", fruits3 es ["banana", "cherry"]')

var fruits3 = ["apple", "banana", "cherry"];
var firstFruit = fruits3.shift();
console.log(firstFruit)
console.log(fruits3)


CASE('UNSHIFT')
console.log('4.-UNSHIFT: Agrega uno o más elementos al principio de un arreglo y devuelve la nueva longitud del arreglo. Ejem: var fruits4 = ["apple", "banana", "cherry"] var fruits4 = ["apple", "banana", "cherry"];')
console.log('fruits4 ahora es ["orange", "apple", "banana", "cherry"]')

var fruits4 = ["apple", "banana", "cherry"];
fruits4.unshift("orange");
console.log(fruits4)


CASE('CONCAT')
console.log('5.-CONCAT: Combina dos o más arreglos en un nuevo arreglo. Ejem: var fruits5 = ["apple", "banana", "cherry"]; var moreFruits = ["orange", "mango"]; var allFruits = fruits5.concat(moreFruits);')
console.log('Ahora allFruits es ["apple", "banana", "cherry", "orange", "mango"]')

var fruits5 = ["apple", "banana", "cherry"];
var moreFruits = ["orange", "mango"];
var allFruits = fruits5.concat(moreFruits);
console.log(allFruits)


CASE('SLICE')
console.log('6.-SLICE: Crea una copia superficial de una porción de un arreglo. Ejem: var fruits6 = ["apple", "banana", "cherry", "orange", "mango"]; var citrus = fruits6.slice(2, 4);')
console.log('citrus es ["cherry", "orange"]')

var fruits6 = ["apple", "banana", "cherry", "orange", "mango"];
var citrus = fruits6.slice(2, 4);
console.log(citrus)


CASE('SPLICE')
console.log('7.-SPLICE: Cambia el contenido de un arreglo eliminando, reemplazando o agregando elementos. Ejem: var fruits7 = ["apple", "banana", "cherry", "orange", "mango"]; var removed = fruits7.splice(2, 1, "pear", "grape");')
console.log('fruits7 es ["apple", "banana", "pear", "grape", "orange", "mango"], removed es ["cherry"]')

var fruits7 = ["apple", "banana", "cherry", "orange", "mango"];
var removed = fruits7.splice(2, 1, "pear", "grape");
console.log(fruits7)
console.log(removed)


CASE('forEach')
console.log('8.-forEach: El método forEach() ejecuta la función indicada una vez por cada elemento del array. Ejem: var numbers = [1, 2, 3, 4, 5];  numbers.forEach(function (number) {console.log(number)});')
console.log('Imprime 1, 2, 3, 4, 5 en la consola')

var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
    console.log(number);
});


CASE('MAP')
console.log('9.-MAP: Crea un nuevo arreglo aplicando una función a cada elemento del arreglo original. Ejem: var numbers2 = [1, 2, 3, 4];var doubled = numbers2.map(function (num) {return num * 2;});')
console.log('Ahora doubled es [2, 4, 6, 8]')

var numbers2 = [1, 2, 3, 4];
var doubled = numbers2.map(function (num) {
    return num * 2;
});
console.log(doubled)


CASE('FILTER')
console.log('10.-FILTER: Crea un nuevo arreglo con todos los elementos que cumplan con cierta condición. Ejem: var ages = [25, 30, 18, 12, 40];var adults = ages.filter(function (age) {return age >= 18;});')
console.log('Ahora adults es [25, 30, 18, 40]')

var ages = [25, 30, 18, 12, 40];
var adults = ages.filter(function (age) {
    return age >= 18;
});
console.log(adults) 


CASE('REDUCE')
console.log('11.-REDUCE: Aplica una función acumuladora a una lista, de izquierda a derecha, para reducirla a un solo valor. Ejem: var numbers3 = [1, 2, 3, 4, 5];var sum = numbers3.reduce(function (acc, curr) {return acc + curr;}, 0);')
console.log('sum es 15')

var numbers3 = [1, 2, 3, 4, 5];
var sum = numbers3.reduce(function (acc, curr) {
    return acc + curr;
}, 0);
console.log(sum)


CASE('reduceRight')
console.log('12.-reduceRight: Similar a reduce(), pero procesa los elementos del arreglo de derecha a izquierda. Ejem: var numbers4 = [1, 2, 3, 4, 5];var sumRight = numbers4.reduceRight(function (acc, curr) {return acc + curr;}, 0);')
console.log('Ahora sumRight es 15')

var numbers4 = [1, 2, 3, 4, 5];
var sumRight = numbers4.reduceRight(function (acc, curr) {
    return acc + curr;
}, 0);
console.log(sumRight)


CASE('FIND')
console.log('13.-FIND: Encuentra el primer elemento que cumple con una condición dada. Ejem: var users = [{ id: 1, name: "Alice" },{ id: 2, name: "Bob" }];var user = users.find(function (user) {return user.id === 2;});')
console.log('user es { id: 2, name: "Bob" }')

var users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];
var user = users.find(function (user) {
    return user.id === 2;
});
console.log(user)


CASE('findIndex')
console.log('14.-findIndex(): Encuentra el índice del primer elemento que cumple con una condición dada. Ejem: var users2 = [{ id: 1, name: "Alice" },{ id: 2, name: "Bob" }];var userIndex = users2.findIndex(function (user) {return user.id === 2;});')
console.log('userIndex es 1')

var users2 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];
var userIndex = users2.findIndex(function (user) {
    return user.id === 2;
});
console.log(userIndex)


CASE('SORT')
console.log('15.-sort(): Ordena los elementos de un arreglo in situ o devuelve un nuevo arreglo ordenado. Ejem: var fruits8 = ["apple", "date", "banana", "cherry"];fruits8.sort();')
console.log('fruits8 ahora es ["apple", "banana", "cherry", "date"]')

var fruits8 = ["apple", "date", "banana", "cherry"];
fruits8.sort();
console.log(fruits8)


CASE('REVERSE')
console.log('16.-REVERSE: Invierte el orden de los elementos en un arreglo. Ejem: var fruits9 = ["apple", "banana", "cherry"];fruits9.reverse();')
console.log('fruits9 ahora es ["cherry", "banana", "apple"]')

var fruits9 = ["apple", "banana", "cherry"];
fruits9.reverse();
console.log(fruits9)


CASE('indexOf')
console.log('17.-indexOf(): Busca el primer índice de un elemento dado en el arreglo. Ejem: var fruits10 = ["apple", "banana", "cherry"];var bananaIndex = fruits10.indexOf("banana");')

console.log('bananaIndex es 1')
var fruits10 = ["apple", "banana", "cherry"];
var bananaIndex = fruits10.indexOf("banana");
console.log(bananaIndex)


CASE('lastIndex')
console.log('18.-lastIndexOf(): Busca el último índice de un elemento dado en el arreglo. Ejem: var fruits11 = ["apple", "banana", "cherry", "banana"];var bananaLastIndex = fruits11.lastIndexOf("banana");')
console.log('bananaLastIndex es 3')

var fruits11 = ["apple", "banana", "cherry", "banana"];
var bananaLastIndex = fruits11.lastIndexOf("banana");
console.log(bananaLastIndex)


CASE('INCLUDES')
console.log('19.-INCLUDES: Comprueba si un arreglo contiene un elemento específico. Ejem: var fruits12 = ["apple", "banana", "cherry"];var includesBanana = fruits12.includes("banana");')

console.log('includesBanana es true')
var fruits12 = ["apple", "banana", "cherry"];
var includesBanana = fruits12.includes("banana");
console.log(includesBanana)


CASE('SOME')
console.log('20.-SOME: Comprueba si al menos un elemento cumple con una condición. Ejem: var numbers5 = [1, 2, 3, 4, 5];var hasEvenNumber = numbers5.some(function (number) {return number % 2 === 0;});')
console.log('hasEvenNumber es true')

var numbers5 = [1, 2, 3, 4, 5];
var hasEvenNumber = numbers5.some(function (number) {
    return number % 2 === 0;
});
console.log(hasEvenNumber) 


CASE('EVERY')
console.log('21.-EVERY: Comprueba si todos los elementos cumplen con una condición. Ejem: var numbers6 = [2, 4, 6, 8, 10];var allEven = numbers6.every(function (number) {return number % 2 === 0;});')
console.log('allEven es true')

var numbers6 = [2, 4, 6, 8, 10];
var allEven = numbers6.every(function (number) {
    return number % 2 === 0;
});
console.log(allEven) 


CASE('isArray')
console.log('22.-isArray(): Determina si un valor es un arreglo. Ejem: var fruits13 = ["apple", "banana", "cherry"];var isFruitsArray = Array.isArray(fruits13);')
console.log('isFruitsArray es true')

var fruits13 = ["apple", "banana", "cherry"];
var isFruitsArray = Array.isArray(fruits13);
console.log(isFruitsArray)


CASE('JOIN')
console.log('23.-JOIN: Convierte todos los elementos de un arreglo en una cadena y los une con un separador. Ejem: var colors = ["red", "green", "blue"];var joinedColors = colors.join(", ");')
console.log('joinedColors es "red, green, blue"')

var colors = ["red", "green", "blue"];
var joinedColors = colors.join(", ");
console.log(joinedColors)


CASE('toString')
console.log('24.-toString(): Convierte un arreglo a una cadena de texto. Ejem: var animals = ["cat", "dog", "elephant"];var animalsString = animals.toString();')
console.log('animalsString es "cat,dog,elephant"')

var animals = ["cat", "dog", "elephant"];
var animalsString = animals.toString();
console.log(animalsString)


CASE('toLocaleString')
console.log('25.-toLocaleString(): Convierte un arreglo a una cadena de texto según el formato local. Ejem: var dates = [new Date(2023, 0, 15), new Date(2023, 4, 20)];var dateStrings = dates.toLocaleString();')
console.log('dateStrings contiene las fechas formateadas según el formato local')

var dates = [new Date(2023, 0, 15), new Date(2023, 4, 20)];
var dateStrings = dates.toLocaleString();
console.log(dateStrings)
