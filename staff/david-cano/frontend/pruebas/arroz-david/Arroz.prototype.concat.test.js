TEST('Arroz prototype concat');

CASE('concat arroz {a, b, c} and {d, e, f}');

let chars1Concat = new Arroz;
chars1Concat[0] = 'a';
chars1Concat[1] = 'b';
chars1Concat[2] = 'c';
chars1Concat.length = 3;

let chars2Concat = new Arroz;
chars2Concat[0] = 'd';
chars2Concat[1] = 'e';
chars2Concat[2] = 'f';
chars2Concat.length = 3;

let concatChars = chars1Concat.concat(chars2Concat);

console.log(concatChars);
//Arroz {0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', length: 6}

CASE('concat arroces {10, 20, 30} and {40, 50}');

let nums1Concat = new Arroz;
nums1Concat[0] = 10;
nums1Concat[1] = 20;
nums1Concat[2] = 30;
nums1Concat.length = 3;

let nums2Concat = new Arroz;
nums2Concat[0] = 45;
nums2Concat[1] = 55;
nums2Concat[2] = 65;
nums2Concat[3] = 75;
nums2Concat.length = 4;

let concatNums = nums1Concat.concat(nums2Concat);

console.log(concatNums);
//Arroz {0: 10, 1: 20, 2: 30, 3: 45, 4: 55, 5: 65, 6: 75, length: 7}

CASE('Concat fruits1 and fruits2');

let fruits1 = new Arroz;
fruits1[0] = 'fresa';
fruits1[1] = 'pera';
fruits1.length = 2;

fruits2 = new Arroz;
fruits2[0] = 'cereza';
fruits2[1] = 'melocotón';
fruits2.length = 2;

let concatenatedFruits = fruits1.concat(fruits2);

console.log("Arroz concatenated: ", concatenatedFruits);
//Arroz {0: 'fresa', 1: 'pera', 2: 'cereza', 3: 'melocotón', length: 4}