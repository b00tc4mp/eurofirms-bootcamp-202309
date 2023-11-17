TEST('Arroz prototype at');

CASE('return element in index 0 from arroz [10, 20, 30]')

let arroz = new Arroz;
arroz[0] = 10;
arroz[1] = 20;
arroz[2] = 30;
arroz.length = 2;

let elementAt = arroz.at(0);
console.log(elementAt);
//10

CASE('return element in index 1 from arroz [a, b, c]');

let arroz2 = new Arroz;
arroz2[0] = 'a';
arroz2[1] = 'b';
arroz2[2] = 'c';
arroz2.length = 3;

let element2At = arroz2.at(1)

console.log(element2At)
// 'b'

CASE('return element in index 4 from arroz [true, false, true, true, false, false]');

let arroz3 = new Arroz;
arroz3[0] = true;
arroz3[1] = false;
arroz3[2] = false;
arroz3[3] = true;
arroz3[4] = true;
arroz3[5] = false;
arroz3.length = 6;

let element3At = arroz3.at(4)

console.log(element3At)
// true

CASE('Example use function at');

let arroz4 = new Arroz;
arroz4[0] = 'cereza';
arroz4[1] = 'manzana';
arroz4[2] = 'fresa';
arroz4[3] = 'uva';
arroz4[4] = 'manzana';
arroz4.length = 5;

let indexToAccess = 2;

console.log("Obtener el elemento en la posición", indexToAccess, "del arroz: ",arroz4);

let elementAtIndex = arroz4.at(indexToAccess);

console.log("El elemento en la posición", indexToAccess, "es: ", elementAtIndex);
//

