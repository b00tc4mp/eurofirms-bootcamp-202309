TEST('push')

CASE('push horse in array [pig, goat, sheep]')

var farm = ['pig', 'goat', 'sheep']

var length = push(farm, 'horse')

console.log(length)
// 4
console.log(farm)
// [pig, goat, sheep, horse]