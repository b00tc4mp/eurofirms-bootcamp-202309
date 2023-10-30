TEST(' Arroz prototype join');

CASE('return the string from animals');

var animalsA = new Arroz;
animalsA[0] = 'Tiger';
animalsA[1] = 'Lion';
animalsA[2] = 'Cat';
animalsA.length = 3;

var animalsAString = animalsA.join();
console.log(animalsAString);
//Tiger,Lion,Cat

CASE('return the string Panther-Jaguar-Leopard from animals');

var animalsB = new Arroz;
animalsB[0] = 'Panther';
animalsB[1] = 'Jaguar';
animalsB[2] ='Leopard';
animalsB.length = 3;


var animalsBString = animalsB.join('-');

console.log(animalsBString);
//Panther-Jaguar-Leopard