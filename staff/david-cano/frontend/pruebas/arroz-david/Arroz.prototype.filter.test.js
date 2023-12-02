TEST('Arroz prototype filter');

CASE('Create a new arroz of persons with name length longer that 10 from arroz people');

let peopleFilter = new Arroz;
peopleFilter[0] = 'Campa Nilla';
peopleFilter[1] = 'John Wick';
peopleFilter[2] = 'Cruela De Vil';
peopleFilter[3] = 'Anita García';
peopleFilter[4] = 'Mer Maid';
peopleFilter[5] = 'Wendy Darling';
peopleFilter[6] = 'Pepito Grillo';
peopleFilter[7] = 'John Doe';
peopleFilter[8] = 'James Hook';
peopleFilter[9] = 'Andy García';
peopleFilter.length = 10;

let filteredPeople = peopleFilter.filter(function (name){
    return name.length > 10;
});

console.log(filteredPeople);
// ['Pepito Grillo', 'Wendy Darling', 'Campa Nilla', 'Anita Garcia', 'Cruela De Vil', 'Andy Garcia']

CASE('Filter the products with color red');

let products = new Arroz;
products[0] = {brand: 'Adidas',model: 'Niza',color: 'White',id: 'ADI-789',};
products[1] = { brand:'Nike', model:'Air Max', color:'Red', id:'NIK-567'};
products[2] = {brand:'Levis', model:'501', color:'Denim', id:'LEV-234'};
products[3] = {brand:'Puma', model:'Rabiosus', color:'Red', id:'PUM-666'};
products[4] = { brand:'Domyos', model:'Cool', color:'Fuchsia', id:'DOM-345'};
products.length = 5;

let redProduct = products.filter(function (item) {
    return item.color === 'Red'
});

console.log(redProduct)
// {brand: 'Nike', model: 'Air Max', color: 'Red', id: 'NIK-567'}
//{brand: 'Puma', model: 'Rabiosus', color: 'Red', id: 'PUM-666'}
//length: 2 }

CASE('Find email with new Date > date of arroz emails');

let emailsFilter = new Arroz;
emailsFilter[0] = {from:'Endesa Agüita', date: new Date('2023/09/18'), subject:'Nos debes una factura', body:'Estimada clienta, como no pague usted la última factura, le cortamos el grifo. Se ha enterao?'};
emailsFilter[1] = {from:'Malsa Chispas', date: new Date('2023/06/20'), subject:'Le renovamos el contrato', body:'Estimada clienta, le vamos a auto-renovar el contrato de luz, y como las cosas estan muy chungas, entienda usted que le subiremos la tarifa al 400%'};
emailsFilter[2] = {from:'Revista HOLA', date: new Date('2023/07/10'), subject:'El rey se enfada con la reina', body:'El rey a vivido una acontesimiento vergonzoso con la reina, enfadándose con ella porque ésta no le ha dado un caramelo'};
emailsFilter.length = 3;

let date1FilteredEmails = emailsFilter.filter(function (email) {
    return email.date > new Date('2023/07/12')
})

console.log(date1FilteredEmails)
// { from: 'Malsa Chispas', ... }

let date2FilteredEmails = emailsFilter.filter(function (email) {
    return email.date > new Date('2023/10/12')
})

console.log(date2FilteredEmails)


let date3FilteredEmails = emailsFilter.filter(function (email) {
    return email.from === 'Revista HOLA'
})

console.log(date3FilteredEmails)
// { from: 'Revista HOLA', ... }

CASE('Filter the even numbers of the arroz: [1, 2, 3, 4, 5, 6]');

let numbers1Filter = new Arroz;
numbers1Filter[0] = 1;
numbers1Filter[1] = 2;
numbers1Filter[2] = 3;
numbers1Filter[3] = 4;
numbers1Filter[4] = 5;
numbers1Filter[5] = 6;
numbers1Filter.length = 6;

let evenNumbers = numbers1Filter.filter(function (element) {
    return element % 2 === 0;
});

console.log("Even numbers:", evenNumbers);
//Números pares: (3) [2, 4, 6]

CASE('Filter the odd numbers of the arroz: [1, 2, 3, 4, 5, 6]');

let numbers2Filter = new Arroz;
numbers2Filter[0] = 1;
numbers2Filter[1] = 2;
numbers2Filter[2] = 3;
numbers2Filter[3] = 4;
numbers2Filter[4] = 5;
numbers2Filter[5] = 6;
numbers2Filter.length = 6;

let oddNumbers = numbers2Filter.filter(function (element) {
    return element % 2 !== 0;
});

console.log("Odd numbers:", oddNumbers);
//Números pares: (3) [1, 3, 5]