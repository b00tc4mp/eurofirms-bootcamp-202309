//El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

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