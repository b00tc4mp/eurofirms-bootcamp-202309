console.log('%cTEST find', 'color: magenta; font-weight: bold;')

console.log('CASE find first person with surname Garcia in array of people [Pepito Grillo, Wendy Darling, James Hook, Mer Maid, Campa Nilla, Anita Garcia, John Doe, Cruela De Vil, Andy Garcia, John Wick]')

var people = ['Pepito Grillo', 'Wendy Darling', 'James Hook', 'Mer Maid', 'Campa Nilla', 'Anita Garcia', 'John Doe', 'Cruela De Vil', 'Andy Garcia', 'John Wick']

var person = find(people, function (name) {
    return name.includes('Garcia')
})

console.log(person)
// Anita Garcia

console.log('CASE find first product with brand Levis and color Denim in array of products')

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

console.log('CASE find from')

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


console.log('CASE example use function find')
// Ejemplo de uso de la función find
var numbers = [1, 2, 3, 4, 5];

// Definimos una función de devolución de llamada que verifica si un número es par.
function isEven(element) {
    //% operador módulo en JavaScript. Calcula el resto de la división de element entre 2. Si el resultado es 0, significa que el número es par.
    return element % 2 === 0;
}

console.log("Buscando el primer número par en el array:");
// Paso 7: Llamamos a la función find con el array y la función de devolución de llamada.
var firstEvenNumber = find(numbers, isEven);

console.log("El primer número par encontrado es:", firstEvenNumber);
// Paso 8: La función find termina y retorna el primer número par encontrado.











/*
console.log('CASO ejemplo del uso de la función encontrar (find)')
// Definición de la función encontrar
function encontrar(array, devolucionDeLlamada) {
    // Paso 1: Iniciamos un bucle for para iterar a través del arreglo.
    for (var i = 0; i < array.length; i++) {
        // Paso 2: En cada iteración, guardamos el elemento actual en una variable llamada "elemento".
        var elemento = array[i];

        // Paso 3: Llamamos a la función de devolución de llamada (devolucionDeLlamada) con el "elemento" como argumento y guardamos el resultado en una variable llamada "resultado".
        var resultado = devolucionDeLlamada(elemento);

        // Paso 4: Comprobamos el valor de "resultado" (lo que retorna la función de devolución de llamada).
        if (resultado) {
            // Paso 5: Si "resultado" es verdadero (true), retornamos el "elemento" actual y la función encontrar termina.
            return elemento;
        }
    }
    // Paso 6: Si no se encuentra ningún elemento que cumpla la condición, la función encontrar termina y retorna undefined (por defecto en JavaScript).
}
*/
