//

function concat(array1, array2) {
    var arrayResult = []

    for (var i = 0; i < array1.length; i++) {
        var element = array1[i]

        arrayResult[i] = element
    }
    for (var i = 0; i < array2.length; i++) {
        var element = array2[i]

        arrayResult[array1.length + i] = element
    }
    return arrayResult
}

