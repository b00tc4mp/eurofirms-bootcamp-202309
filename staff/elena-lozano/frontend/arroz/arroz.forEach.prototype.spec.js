TEST("Arroz prototype forEach")

CASE("print each char from chars")


//Aqui definimos el las características del prototype de Arroz

const chars = new Arroz
chars[0] = "a"
chars[1] = "b"
chars[2] = "c"
chars.length = 3
// Como ahora tiene propiedades, pasa de ser length=[0] a length=[3]

function printChar(char) {
    console.log(char)
}

//Saca en pantalla cada valor del array
chars.forEach(printChar)


//La función multiplica por 100 cada uno de los valores del array y muestra el resultado
CASE("muliply each number from nums and print it")

var nums = new Arroz
nums[0] = 10
nums[1] = 20
nums[2] = 30
nums.length = 3

nums.forEach(function (num) {
    console.log(num * 100)
})

//Dentro del array, busca las palabras que cumplan la condición (4 letras) y las muestra
CASE("print each word with length 4 from things")

var things = new Arroz
things[0] = "nice" //la muestra
things[1] = "rice"//La muestra
things[2] = "hide"//La muestra
things[3] = "letter"
things[4] = "tomato"
things[5] = "banana"
things[6] = "rain"//La muestra
things[7] = "of"
things[8] = "to"
things[9] = "from"//La muestra
things[10] = "car"
things.length = 11

things.forEach(function (thing) {
    if (thing.length === 4)
        console.log(thing)
})
