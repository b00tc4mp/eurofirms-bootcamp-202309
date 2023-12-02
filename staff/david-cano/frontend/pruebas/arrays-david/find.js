// Definición de la función find
function find(array, callback) {
    // Paso 1: Iniciamos un bucle for para iterar a través del array.
    for (var i = 0; i < array.length; i++) {
        // Paso 2: En cada iteración, guardamos el elemento actual en una variable llamada "element".
        var element = array[i];

        // Paso 3: Llamamos a la función de devolución de llamada (callback) con el "element" como argumento y guardamos el resultado en una variable llamada "result".
        var result = callback(element);

        // Paso 4: Comprobamos el valor de "result" (lo que retorna la función de devolución de llamada).
        if (result) {
            // Paso 5: Si "result" es verdadero (true), retornamos el "element" actual y la función find termina.
            return element;
        }
    }
    // Paso 6: Si no se encuentra ningún elemento que cumpla la condición, la función find termina y retorna undefined (por defecto en JavaScript).
}

