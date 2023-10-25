TEST('Arroz prototype findIndex');

CASE('example use function findIndex');

var numbersExample = new Arroz;
numbersExample[0] = 1;
numbersExample[1] = 2;
numbersExample[2] = 3;
numbersExample[3] = 4;
numbersExample[4] = 5;
numbersExample.length = 5;

var targetNumber = 3;
console.log("Buscando el índice del número", targetNumber, "en numbersExample {1, 2, 3, 4, 5}");

var indexExample = numbersExample.findIndex(function (element) {
    return element === targetNumber;
})

if (indexExample !== -1) {
    console.log("El número", targetNumber, "se encuentra en el índice", indexExample, "de numbersExample.");
} else {
    console.log("El número", targetNumber, "no se encuentra dentro de numbersExample.");
}

CASE('Find index of first element that is lower than 20 from numbersFindIndex');

var numbersFindIndex = new Arroz;
numbersFindIndex[0] = 45;
numbersFindIndex[1] = 29;
numbersFindIndex[2] = 23;
numbersFindIndex[3] = 19;
numbersFindIndex[4] = 41;
numbersFindIndex.length = 5;

var index = numbersFindIndex.findIndex(function (number){
    if(number < 20) return true;
    return false;
})

console.log(index);
//3 (valor 19)

CASE('Find index of the first number greater than 100');

var numbers2FindIndex = new Arroz;
numbers2FindIndex[0] = 95;
numbers2FindIndex[1] = 49;
numbers2FindIndex[2] = 63;
numbers2FindIndex[3] = 99;
numbers2FindIndex[4] = 31;
numbers2FindIndex.length = 5;

var index = numbersFindIndex.findIndex(function (number){
    if(number > 100) return true;
    return false;
})

console.log(index);
//-1


