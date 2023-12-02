function includes(array, searchElement) {
    // Iteramos a través del array.
    for (var i = 0; i < array.length; i++) {
        // Guardamos el elemento actual en una variable llamada "element".
        var element = array[i];

        // Comparamos el "element" con el "searchElement".
        if (element === searchElement) {
            // Si encontramos una coincidencia, devolvemos "true" (el elemento está en el array).
            return true;
        }
    }

    // Si no encontramos ninguna coincidencia después de recorrer todo el array, devolvemos "false" (el elemento no está en el array).
    return false;
}
