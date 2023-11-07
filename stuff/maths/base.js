var num = Date.now() + Math.random()

console.log(num)
// VM443:3 1699267841137.9226
num.toString(2)
// '11000101110100100010000011000110001110001.111011000011'
num.toString(3)
// '20000110002220020022002001.2202202'
num.toString(4)
// '120232210100120301301.323003'
num.toString(5)
// '210320100031404022.43013'
num.toString(6)
// '3340344411054001.53114'
num.toString(7)
// '233524304221426.6313'
num.toString(8)
// '30564420306161.7303'
num.toString(9)
// '6013086208061.8265'
num.toString(10)
// '1699267841137.9226'
num.toString(16)
// '18ba4418c71.ec3'
num.toString(32)
// '1hei4333h.tgo'
num.toString(64)
// VM599:1 Uncaught RangeError: toString() radix argument must be between 2 and 36
//     at Number.toString (<anonymous>)
//     at <anonymous>:1:5
// (anonymous) @ VM599:1
num.toString(36)
// 'loms75o1.x7p'
'abcdefghijklmnopqrstuvwxyz'.length
// 26
'0123456789'.length
    // 10
    (1).toString(36)
    // '1'
    (2).toString(36)
    // '2'
    (9).toString(36)
    // '9'
    (10).toString(36)
    // 'a'
    (11).toString(36)
    // 'b'
    (35).toString(36)
    // 'z'
    (36).toString(36)
    // '10'
    (37).toString(36)
// '11'
'0123456789abcdefghijklmnopqrstuvwxyz'.length
    // 36
    (1000).toString(36)
// 'rs'