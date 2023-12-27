// with plain objects

// cloning creating a new object and copying all properties

var car1 = { brand: 'Volkswagen', model: 'Beetle' }

var car2 = { brand: car1.brand, model: car1.model }

// cloning using a loop with keys

var car3 = {}

var keys = Object.keys(car1)
// ['brand', 'model']

for (var i = 0; i < keys.length; i++) {
    var key = keys[i]

    car3[key] = car1[key]
}

// cloning using spread operator (es6)

var car4 = { ...car1 }


// with arrays

// cloning creating a new array and copying all properties

var colors1 = ['red', 'green', 'blue']

var colors2 = [colors1[0], colors1[1], colors1[2]]

// cloning using a loop with keys

var colors3 = []

for (var i = 0; i < colors1.length; i++) {
    colors3[i] = colors1[i]
}

// cloning using spread operator (es6)

var colors4 = [...colors1]
