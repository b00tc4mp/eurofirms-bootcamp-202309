const dictionary = {
    hola: 'hello',
    mundo: 'world',
    adios: 'goodbye',
    ordenador: 'computer'
    // ...
}

const word = process.argv[2]

const translation = dictionary[word]

console.log(translation)
