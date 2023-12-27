// OOP - Object Oriented Programming

//var o = new Object()
var o = {}
o[0] = 10
o[1] = 20
o[2] = 30
o.name = 'Oswald'

// var a = new Array()
var a = []
a[0] = 10
a[1] = 20
a[2] = 30
a.name = 'Anna'
// Array.prototype.forEach
a.forEach(function (element) {
    console.log(element)
})
Array.prototype.forEach = function () {
    console.log('🤡')
}
a.forEach(function (element) {
    console.log(element)
})

// var f = new Function('name', 'surname', "console.log('hello ' + name + ' ' + surname)")
var f = function (name, surname) {
    console.log('hello ' + name + ' ' + surname)
}
f[0] = 10
f[1] = 20
f[2] = 30
f.surname = 'Fernandez'

var n = 1

function Person(name, surname) {
    this.name = name
    this.surname = surname
}
Person.prototype.complain = function () {
    console.log('🤬')
}
Person.prototype.fart = function () {
    console.log('💨')
}
var peter = new Person('Peter', 'Pan')
var wendy = new Person('Wendy', 'Darling')
var james = new Person('James', 'Hook')
wendy.complain()
wendy.fart()

function Car(brand, model) {
    this.brand = brand
    this.model = model
}
Car.prototype.start = function () {
    console.log('🟢')
}
Car.prototype.stop = function () {
    console.log('🔴')
}
Car.prototype.speedUp = function () {
    console.log('💨')
}
var ferrari = new Car('Ferrari', 'Testarossa')
ferrari.start()
ferrari.speedUp()
var lambo = new Car('Lamborghini', 'Diablo')
lambo.stop()
var maserati = new Car('Maserati', 'Ghibi')
var lavabici = new Car('Bici', 'Lavadora')
