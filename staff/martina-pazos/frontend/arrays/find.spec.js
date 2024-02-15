TEST('find')
// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.


CASE('find first person with surname Garcia in array of people [Pepito Grillo, Wendy Darling, James Hook, Mer Maid, Campa Nilla, Anita Garcia, John Doe, Cruela De Vil, Andy Garcia, John Wick]')

var people = ['Pepito Grillo', 'Wendy Darling', 'James Hook', 'Mer Maid', 'Campa Nilla', 'Anita Garcia', 'John Doe', 'Cruela De Vil', 'Andy Garcia', 'John Wick']

var person = find(people, function (name) {
    return name.includes('Garcia')
})

console.log(person)
// Anita Garcia

CASE('find first product with brand Levis and color Denim in array of products')

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
        color: 'Tiger',
        id: 'PUM-666'
    },
    {
        brand: 'Domyos',
        model: 'Cool',
        color: 'Fuchsia',
        id: 'DOM-345'
    }
]

var product = find(products, function (item) {
    return item.brand === 'Levis' && item.color === 'Denim'
})

console.log(product)
// { brand: 'Levis', model: '501', color: 'Denim', id: 'LEV-234' }

var product = find(products, function (item) {
    return item.brand === 'Levis' && item.color === 'Pink'
})

console.log(product)
// undefined


CASE('find email with text contrato in array of emails')
// declaramos la primera variable con los datos que contiene la array

var emails = [
    {
        from: 'Endesa Agüita',
        subject: 'Nos debes una factura',
        body: 'Estimada clienta, como no pague usted la última factura, le cortamos el grifo. Se ha enterao?'
    },
    {
        from: 'Malsa Chispas',
        subject: 'Le renovamos el contrato',
        body: 'Estimada clienta, le vamos a auto-renovar el contrato de luz, y como las cosas estan muy chungas, entienda usted que le subiremos la tarifa al 400%'
    },
    {
        from: 'Revista HOLA',
        subject: 'El rey se enfada con la reina',
        body: 'El rey a vivido una acontesimiento vergonzoso con la reina, enfadándose con ella porque ésta no le ha dado un caramelo'
    }
]
// declaramos una segunda variable llamando al metodo find
var email = find(emails, function (email) {
    return email.subject.includes('contrato') || email.body.includes('contrato')
})

console.log(email)
// { from: 'Malsa Chispas', ... }

var email = find(emails, function (email) {
    return email.from === 'Revista HOLA'
})

console.log(email)
// { from: 'Revista HOLA', ... }

