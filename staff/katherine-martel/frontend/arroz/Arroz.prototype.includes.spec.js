TEST('Arroz prototype includes')

CASE('check arroz nums includes 40')

const nums2 = new Arroz
nums2[0] = 10
nums2[1] = 20
nums2[2] = 30
nums2[3] = 40
nums2[4] = 50
nums2.legth = 5

const exists40 = nums2.includes(40)

console.log(exists40)
//true

CASE('check arroz animals includes tiger')

const animals = new Arroz
animals[0] = 'cat'
animals[1] = 'dog'
animals[2] = 'lion'
animals[3] = 'tiger'
animals[4] = 'monkey'
animals[5] = 'snake'
animals[6] = 'horse'
animals.length = 7

const existsTiger = animals.includes('tiger')

console.log(existsTiger)
//true

CASE('check arroz animals2 includes elephant')
const animals = new Arroz
animals[0] = 'cat'
animals[1] = 'dog'
animals[2] = 'lion'
animals[3] = 'tiger'
animals[4] = 'monkey'
animals[5] = 'snake'
animals[6] = 'horse'
animals.length = 7

const existsElephant = animals.includes('elephant')

console.log(existsElephant)
//false
