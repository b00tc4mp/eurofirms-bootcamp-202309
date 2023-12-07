console.log ('%cTEST lastindexof', 'color: magenta; font-weight: bold;')

console.log('CASE returns last index of 20 on array [10, 20, 30, 40, 20, 50]')

var nums = [10, 20, 30, 40, 20, 50]

var index = lastIndexOf(nums, 20)

console.log(index)
//4

console.log('CASE returns -1 when not found 60 on array [10, 20, 30, 40, 20, 50]')

var nums = [10, 20, 30, 40, 20, 50]

var index = lastIndexOf(nums, 60)

console.log(index)
//-1
