//El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

// Definición de la función shift
function shift(array) {
    // Guardamos el primer elemento del array en una variable llamada "deletedElement".
    var deletedElement = array[0];

    // Usamos un bucle for para recorrer el array y mover cada elemento una posición hacia la izquierda.
    for (var i = 0; i < array.length - 1; i++) {
        // Asignamos el valor del elemento siguiente al elemento actual.
        array[i] = array[i + 1];
    }

    // Reducimos la longitud del array en 1, eliminando el último elemento.
    array.length--;

    // Retornamos el elemento eliminado, que era el primer elemento del array.
    return deletedElement;
}
