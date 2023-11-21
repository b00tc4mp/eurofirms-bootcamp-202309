// styled console log with command '%c' after the ',' we write the css styles
console.log('%cTEST indexOf', 'color: magenta; font-weight: bold;');

console.log('CASE return index of 20 in array [10, 20, 30, 40]');

var nums = [10, 20, 30, 40]

var index = indexOf(nums, 20)

console.log(index)
// 1

console.log('CASE return -1 when dont find 50 in the array [10, 20, 30, 40]');

var nums = [10, 20, 30, 40]

var index = indexOf(nums, 50)

console.log(index)
// -1