TEST('reverse')
//El método reverse() invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.
CASE('reverse the array [10, 20, 30, 40, 50] and returns it')

//declaramos una var 
var nums = [10, 20, 30, 40, 50]
//declaramos otra var donde llamamos al método reverse
var numsRef = reverse(nums)

console.log(nums)
//50,40,30,20,10






