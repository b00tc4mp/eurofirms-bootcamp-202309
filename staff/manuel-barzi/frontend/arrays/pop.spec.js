TEST('pop')

CASE('pop tomato from array [broccoli, cauliflower, cabbage, kale, tomato]')

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

var extracted = pop(plants)

console.log(extracted)
// tomato

console.log(plants)
// [broccoli, cauliflower, cabbage, kale]