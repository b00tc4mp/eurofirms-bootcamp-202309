//El método forEach() ejecuta la función indicada una vez por cada elemento del array.

// Definición de la función forEach
function forEach(array, callback) {
    // Iniciamos un bucle for para iterar a través del array.
    for (var i = 0; i < array.length; i++) {
        // En cada iteración, guardamos el elemento actual en una variable llamada "element".
        var element = array[i];

        // Llamamos a la función de devolución de llamada (callback) con el "element" como argumento.
        callback(element);
    }
}



