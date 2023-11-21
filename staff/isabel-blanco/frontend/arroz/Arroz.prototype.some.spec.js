TEST('Arroz prototype some')

CASE('Example use function some')

const numbersSome = new Arroz

numbersSome[0] = 1
numbersSome[1] = 2
numbersSome[2] = 3
numbersSome[3] = 4
numbersSome[4] = 5
numbersSome[5] = 6

numbersSome.length = 6

function inside(element) {
    return element % 2 === 0
}

console.log('Check if the new number is par: {1,2,3,4,5,6}')

const hasEvenNumber = numbersSome.some(inside)

if (hasEvenNumber) {

}