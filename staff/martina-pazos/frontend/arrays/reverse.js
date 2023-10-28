function reverse(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {

        var result = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = result
    }

    return array
}

