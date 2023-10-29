TEST('arroz prototype push')

CASE('push horse in array farm')

// declaramos la variable (farm)
var farm = new Arroz
farm[0] = 'pig'
farm[1] = 'goat'
farm[2] = 'shepp'
farm.length = 3

var length = farm.push("horse")

console.log(length)
// 4

console.log(farm)
//[ 0:'pig', 1:'goar',2:'sheep', 4'horse']