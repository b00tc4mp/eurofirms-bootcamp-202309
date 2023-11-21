TEST('Arroz prototype find')

console.log('CASE find first person with surname Garcia in array of people in the list')

const people = new Arroz

people[0] = 'John Wick'
people[1] = 'Pepito Grillo'
people[2] = 'Wendy Darling'
people[3] = 'James Hook'
people[4] = 'Mer Maid'
people[5] = 'Campa Nilla'
people[6] = 'Anita Garcia'
people[7] = 'John Doe'
people[8] = 'Cruela De Vil'
people[9] = 'Andy Garcia'

people.length = 10

const person = people.find(function (person) {
    return person.includes("Garcia")
})

console.log(person)
// Garcia