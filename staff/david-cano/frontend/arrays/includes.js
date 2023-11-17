//El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

// Definición de la función includes
function includes(array, searchElement) {
    // Iniciamos un bucle for para iterar a través del array.
    for (var i = 0; i < array.length; i++) {
        // En cada iteración, guardamos el elemento actual en una variable llamada "element".
        var element = array[i];

        // Comparamos el "element" actual con el "searchElement" que estamos buscando.
        if (element === searchElement) {
            // Si encontramos una coincidencia, retornamos true y la función includes termina.
            return true;
        }
    }
    // Si no se encuentra el elemento buscado después de iterar por todo el array, la función includes termina y retorna false.
    return false;
}
