
TEST('push')
//El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
CASE('push horse in array [pig, goat, sheep]')
// declaramos la variable (farm)
var farm = ['pig', 'goat', 'sheep']
// declaramos otra variable llamando al método push (length)
var length = push(farm, "horse")

console.log(length)
// 4

console.log(farm)
//['pig', 'goar','sheep', 'horse']