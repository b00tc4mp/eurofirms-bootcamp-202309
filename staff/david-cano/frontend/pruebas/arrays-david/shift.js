function shift(array) {
    // Guardamos el primer elemento del array en una variable llamada "deletedElement".
    var deletedElement = array[0];

    // Iteramos a través del array desde el primer elemento hasta el penúltimo.
    for (var i = 0; i < array.length - 1; i++) {
        // Movemos cada elemento una posición hacia el principio del array.
        array[i] = array[i + 1];
    }

    // Reducimos la longitud del array en 1.
    // Esto simula la eliminación del primer elemento del array.
    array.length--;

    // Devolvemos el elemento que eliminamos, que es el primer elemento original del array.
    return deletedElement;
}
