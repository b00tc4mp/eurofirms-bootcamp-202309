console.log('TEST forEach')

console.log('CASE print array of number in console')

var numbers = [10, 20, 30, 40, 50]

forEach(numbers, function (num) {
    console.log(num)
})

// 10
// 20
// 30
// 40
// 50

console.log('CASE print words with length four')

var words = ['do', 'cat', 'apple', 'orange', 'banana', 'lemon', 'watermelon', 'rain', 'pain', 'pear', 'beer', 'start', 'star']

forEach(words, function (word) {
    if (word.length === 4)
        console.log(word)
})

// rain
// pain
// pear
// beer
// star

console.log('CASE print blue items from cart')

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

forEach(items, function (item) {
    if (item.color === 'blue')
        console.log(item)
})

// {converse}
// {levis}
// {panama}