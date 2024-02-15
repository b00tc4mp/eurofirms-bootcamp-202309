function concat(array1, array2) {
    var result = []

    for (var i = 0; i < array1.length; i++) {
        var element = array1[i]

        result[i] = element
    }

    for (var i = 0; i < array2.length; i++) {
        var element = array2[i]

        result[array1.length + i] = element
    }

    return result
}




