//El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

TEST('Arroz prototype find');

CASE('Find first person with surname Garcia from people [Pepito Grillo, Wendy Darling, James Hook, Mer Maid, Campa Nilla, Anita Garcia, John Doe, Cruela De Vil, Andy Garcia, John Wick]');

let people = new Arroz;
people[0] = 'Pepito Grillo';
people[1] = 'Wendy Darling';
people[2] = 'Campa Nilla';
people[3] = 'Anita García';
people[4] = 'James Hook';
people[5] = 'Andy García';
people[6] = 'John Doe';
people[7] = 'Mer Maid';
people[8] = 'John Wick';
people[9] = 'Cruela De Vil';
people.length = 10;

let person = people.find(function (name) {
    return name.includes('García')
})

console.log(person)
// Anita García

CASE('Find first product with brand Levis and color Denim form products');

let productsFind = new Arroz;
productsFind[0] = {brand:'Adidas', model:'Niza', color: 'White', id: 'ADI-789'};
productsFind[1] = {brand:'Nike', model:'Air Max', color:'Red', id:'NIK-567'};
productsFind[2] = {brand:'Levis', model:'501', color:'Denim', id:'LEV-234'};
productsFind[3] = {brand:'Puma', model:'Rabiosus', color:'Tiger', id:'PUM-666'};
productsFind[4] = {brand:'Domyos', model:'Cool', color:'Fuchsia', id:'DOM-345'};
productsFind.length = 5;

let product1 = productsFind.find(function (item) {
    return item.brand === 'Levis' && item.color === 'Denim';
})

console.log(product1)
// {brand: 'Levis', model: '501', color: 'Denim', id: 'LEV-234' }

let product2 = products.find(function (item) {
    return item.brand === 'Levis' && item.color === 'Pink';
})

console.log(product2)
//undefined

CASE('Find from emails');

let emails = new Arroz;
emails[0] = {from:'Endesa Agüita', subject:'Nos debes una factura', body:'Estimada clienta, como no pague usted la última factura, le cortamos el grifo. Se ha enterao?'};
emails[1] = {from:'Malsa Chispas', subject:'Le renovamos el contrato', body:'Estimada clienta, le vamos a auto-renovar el contrato de luz, y como las cosas estan muy chungas, entienda usted que le subiremos la tarifa al 400%'};
emails[2] = {from:'Revista HOLA', subject:'El rey se enfada con la reina', body:'El rey a vivido una acontesimiento vergonzoso con la reina, enfadándose con ella porque ésta no le ha dado un caramelo'};
emails.length = 3;

var email = emails.find(function (email) {
    return email.subject.includes('contrato') || email.body.includes('contrato')
});

console.log(email)
//{from:'Malsa Chispas', ... }

var email = emails.find(function (email) {
    return email.from === 'Revista HOLA'
});

console.log(email)
//{from:'Revista HOLA', ... }

CASE('example use function find');

let numbersExampleFind = new Arroz;
numbersExampleFind[0] = 1;
numbersExampleFind[1] = 4;
numbersExampleFind[2] = 3;
numbersExampleFind[3] = 2;
numbersExampleFind[4] = 5;
numbersExampleFind.length = 5;

function isEven(element){
    return element % 2 === 0;
}

console.log("Buscando el primer número par en el nuevo objeto numbersExampleFind {1, 4, 3, 2, 5}");

let firstEvenNumber = numbersExampleFind.find(isEven);

console.log("El primer número par encontrado es: ", firstEvenNumber);