function join(array, separator = ',') {
    var result = '' // primera iteracion 'Tiger', segunda iteracion 'Tiger,Lion' 

    for (var i = 0; i < array.length; i++) {
        var element = array[i]
        if (i !== 0) { // si no es la primera iteracion, agregamos la coma
            result = result + separator + element
        }
        else { // al ser la primera iteracion, no agregamos la coma
            result = element
        }
    }

    return result
}