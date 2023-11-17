function filter(array, callback) {
    // Creamos un arreglo vacío llamado "arrayResult" para almacenar los elementos que cumplan con la condición.
    var arrayResult = [];

    // Iniciamos un bucle for para recorrer cada elemento del arreglo de entrada.
    for (let index = 0; index < array.length; index++) {
        var element = array[index];

        // Llamamos a la función de devolución de llamada (callback) con el elemento actual y guardamos el resultado en la variable "result".
        var result = callback(element);

        // Comprobamos si el "result" es verdadero (truthy), lo que significa que el elemento cumple con la condición.
        if (result) {
            // Si el resultado es verdadero, agregamos el "element" al arreglo de resultados.
            arrayResult[arrayResult.length] = element;
            // Nota: Esta línea agrega el "element" al final del arreglo "arrayResult".
        }
        // Continuamos iterando por el arreglo hasta que se hayan evaluado todos los elementos.
    }

    // Una vez completada la iteración, retornamos el "arrayResult" que contiene los elementos que cumplieron con la condición.
    return arrayResult;
}
