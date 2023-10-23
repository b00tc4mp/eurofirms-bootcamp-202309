// Definición de la función forEach
function forEach(array, callback) {
    // Paso 1: Iniciamos un bucle for para iterar a través del array.
    for (var i = 0; i < array.length; i++) {
        // Paso 2: En cada iteración, guardamos el elemento actual en una variable llamada "element".
        var element = array[i];

        // Paso 3: Llamamos a la función de devolución de llamada (callback) con el "element" como argumento.
        callback(element);
        // Nota: El propósito de esta función es permitir que el código exterior haga algo con cada elemento del array.
    }
    // Paso 4: Una vez que hemos iterado a través de todos los elementos del array, la función forEach termina.
}


