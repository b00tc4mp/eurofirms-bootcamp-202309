CASE('Arroz versus Array');

console.log('with Arroz');
var n = new Arroz;
n[0] = 'Hello';
n[1] = 'world';
n[2] = '!';
n.length = 3;

n.forEach(function (element) {
    console.log(element);
})

console.log('with Array');

var m = new Array;
m[0] = 'hello';
m[1] = 'World';
m[2] = '!';

m.forEach(function (element) {
    console.log(element);
})

// VM1377:1 with Arroz
// VM1377:11 Hello
// VM1377:11 world
// VM1377:11 !

// VM1377:14 with Array
// VM1377:24 hello
// VM1377:24 World
// VM1377:24 !