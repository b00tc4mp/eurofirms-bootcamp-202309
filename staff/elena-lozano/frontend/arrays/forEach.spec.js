// EJEMPLO 1:Muesta los elementos de un array en el inspector
console.log('TEST forEach')

// qUE IMPRIMA UN ARRAY EN LA PANTALLA

console.log('CASE print array of number in console')

//Le decimos el array en cuestion
var numbers = [10, 20, 30, 40, 50]
//le decimos que forEach que itere ese array y que para cada elemento llame a la función (que la declaramos en la misma orden y que hace que lo muestre en la pantalla)
forEach(numbers, function (num) {
    console.log(num)
})

//EJEMPLO 2: imprimir las palabras que tengan 4 letras
var words = ['do', 'cat', 'apple', 'orange', 'banana', 'lemon', 'watermelon', 'rain', 'pain', 'pear', 'beer', 'start', 'star']

forEach(words, function (word) {
    //si la palabra tiene longitud 4, entonces hace un console.log (lo pone en pantalla)
    if (word.length === 4)
        console.log(word)
})
// rain
// pain
// pear
// beer
// star


//EJEMPLO 3: Mostrar los productos azules que tenemos en el carrito de la compra
console.log('CASE print blue items from cart')
//definimos el array con todos los productos, cada producto es un OBJETO
var items = [
    {
        brand: 'Adidas',
        type: 'socks',
        color: 'yellow'
    },
    {
        brand: 'Converse',
        type: 'socks',
        color: 'blue'
    },
    {
        brand: 'Levis',
        type: 'jeans',
        color: 'blue'
    },
    {
        brand: 'Desigual',
        type: 'dress',
        color: 'colorinche'
    },
    {
        brand: 'Zara',
        type: 'jacket',
        color: 'black'
    },
    {
        brand: 'Panama',
        type: 'boots',
        color: 'blue'
    },
    {
        brand: 'Decathlon',
        type: 'umbrella',
        color: 'purple'
    }
]
//que imprima los objetos cuya característica sea azul
forEach(items, function (item) {
    if (item.color === 'blue')
        console.log(item)
    })
// {converse}
// {levis}
// {panama}


