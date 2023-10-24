// vamos a hacer la function, recordemos que información nos facilita at, nos devuelve la posición donde esta una elemento en el índice (index), en este case nos tiene que devolver el elemento que esta en la posición 0

//leemos: a través del método att llamamos a la funcion donde se encuentra la array y el indice y co un condicional le decimos, si el índice es mayor o = a 0 (para que recorra todo e indes), danos la posición en la array que ocupa el valor 0
function at(array, index) {
    if (index >= 0) {
        var value = array[index]

        return value
    }

    var value = array[array.length + index]

    return value
}
