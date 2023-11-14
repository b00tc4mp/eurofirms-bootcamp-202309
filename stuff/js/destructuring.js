var nums = [10, 20, 30]
// undefined
var { 0: x, 1: y, 2: z } = nums
// undefined
x
// 10
y
// 20
z
// 30
var [x, y, z] = nums
// undefined
x
// 10
y
// 20
z
// 30
var [, , z] = nums
// undefined
z
// 30