function find(array, callback) {
    // Iterar sobre cada elemento del array
    for (var i = 0; i < array.length; i++) {
        var element = array[i];

        // Llamar a la función de devolución de llamada con el elemento actual
        var result = callback(element);

        // Si el resultado es verdadero, devolver el elemento actual
        if (result) return element;
    }
}

/*
En este código, la función findrecibe una arrayy una función de devolución de llamada ( callback) como parámetros de entrada. A continuación, realice los siguientes pasos:

Iterar sobre cada elemento del array : Se utiliza un bucle forpara iterar sobre cada elemento del array.

Llamar a la función de devolución de llamada : Dentro del bucle, se llama a la función de devolución de llamada ( callback) con el elemento actual como argumento.

Comprobar el resultado : Si el resultado de la función de devolución de llamada es verdadero, se devuelve el elemento actual.

Este código implementa una función de búsqueda que registra una matriz y aplica una función de devolución de llamada a cada elemento. Si la función de devolución de llamada devuelve un resultado verdadero para algún elemento, la función finddevuelve ese elemento. Si la función de devolución de llamada no devuelve un resultado verdadero para ningún elemento, la función findno devuelve nada.

Recuerde que este código no utiliza ninguna biblioteca externa y se basa en JavaScript puro.
*/