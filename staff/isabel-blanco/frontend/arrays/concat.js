function concat(array1, array2) {
    var results = []

    for (var i = 0; i < array1.length; i++) {
        var element = array1[i]

        results[i] = element
    }

    for (var i = 0; i < array2.length; i++) {
        var element = array2[i]

        results[array1.length + i] = element
    }

    return results
}