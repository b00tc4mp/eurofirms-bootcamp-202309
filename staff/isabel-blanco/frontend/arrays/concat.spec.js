console.log('TEST concat')

console.log('CASE concat arrays ["a", "b", "c"] and ["d", "e", "f"]')

var chars1 = ["a", "b", "c"]

var chars2 = ["d", "e", "f"]

var chars3 = concat(chars1, chars2)

// ["a", "b", "c", "d", "e", "f"]

console.log('CASE concat arrays [10, 20, 30] and [40, 50]')

var nums1 = [10, 20, 30]
var nums2 = [40, 50]

var nums3 = concat(nums1, nums2)

console.log(nums3)
// [10 , 20, 30, 40, 50]