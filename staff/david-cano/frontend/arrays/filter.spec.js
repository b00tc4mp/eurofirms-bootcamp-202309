//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

console.log('%cTEST filter', 'color: magenta; font-weight: bold;')

console.log('CASE create a new array with persons with name length longer that 10 [Pepito Grillo, Wendy Darling, James Hook, Mer Maid, Campa Nilla, Anita Garcia, John Doe, Cruela De Vil, Andy Garcia, John Wick]')

var people = ['Pepito Grillo', 'Wendy Darling', 'James Hook', 'Mer Maid', 'Campa Nilla', 'Anita Garcia', 'John Doe', 'Cruela De Vil', 'Andy Garcia', 'John Wick']

var filteredPeople = filter(people, function (name) {
    return name.length > 10
})

console.log(filteredPeople)
// ['Pepito Grillo', 'Wendy Darling', 'Campa Nilla', 'Anita Garcia', 'Cruela De Vil', 'Andy Garcia']

console.log('CASE filter the products with color red')

var products = [
    {
        brand: 'Adidas',
        model: 'Niza',
        color: 'White',
        id: 'ADI-789',
    },
    {
        brand: 'Nike',
        model: 'Air Max',
        color: 'Red',
        id: 'NIK-567'
    },
    {
        brand: 'Levis',
        model: '501',
        color: 'Denim',
        id: 'LEV-234'
    },
    {
        brand: 'Puma',
        model: 'Rabiosus',
        color: 'Red',
        id: 'PUM-666'
    },
    {
        brand: 'Domyos',
        model: 'Cool',
        color: 'Fuchsia',
        id: 'DOM-345'
    }
]

var redProduct = filter(products, function (item) {
    return item.color === 'Red'
})

console.log(redProduct)
// { brand: 'Levis', model: '501', color: 'Denim', id: 'LEV-234' }


console.log('CASE find email with new Date > date of emails')

var emails = [
    {
        from: 'Endesa Agüita',
        date: new Date('2023/09/18'),
        subject: 'Nos debes una factura',
        body: 'Estimada clienta, como no pague usted la última factura, le cortamos el grifo. Se ha enterao?'
    },
    {
        from: 'Malsa Chispas',
        date: new Date('2023/06/20'),
        subject: 'Le renovamos el contrato',
        body: 'Estimada clienta, le vamos a auto-renovar el contrato de luz, y como las cosas estan muy chungas, entienda usted que le subiremos la tarifa al 400%'
    },
    {
        from: 'Revista HOLA',
        date: new Date('2023/07/10'),
        subject: 'El rey se enfada con la reina',
        body: 'El rey a vivido una acontesimiento vergonzoso con la reina, enfadándose con ella porque ésta no le ha dado un caramelo'
    }
]

var dateFilteredEmails = filter(emails, function (email) {
    return email.date > new Date('2023/07/12')
})

console.log(dateFilteredEmails)
// { from: 'Malsa Chispas', ... }

var dateFilteredEmails = filter(emails, function (email) {
    return email.date > new Date('2023/10/12')
})

console.log(dateFilteredEmails)


var dateFilteredEmails = filter(emails, function (email) {
    return email.from === 'Revista HOLA'
})

console.log(dateFilteredEmails)
// { from: 'Revista HOLA', ... }

console.log('CASE example use function filter')
// Ejemplo de uso de la función filter
var numbers = [1, 2, 3, 4, 5, 6];

console.log("Filtrar los números pares del array:");

// Llamamos a la función filter con el array "numbers" y una función de devolución de llamada que verifica si el número es par.
var evenNumbers = filter(numbers, function(element) {
    // La función de devolución de llamada recibe cada elemento del array y verifica si es par.
    return element % 2 === 0;
});

// Mostramos el arreglo de números pares obtenidos.
console.log("Números pares:", evenNumbers);
//Números pares: (3) [2, 4, 6]
