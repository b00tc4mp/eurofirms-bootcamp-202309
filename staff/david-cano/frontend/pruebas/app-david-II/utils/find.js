function find(array, callback){
    // Recorre la matriz array
    for(var i = 0; i < array.length; i++){
        // Obtiene el elemento actual de la matriz array
        var element = array[i]

         // Llama a la función de devolución de llamada con el elemento actual como argumento
        var result = callback(element)

        // Si la función de devolución de llamada devuelve `true`, devuelve el elemento actual
        if(result)
        return element
    }
    // Si la función de devolución de llamada no devuelve `true` para ningún elemento de la matriz, devuelve `undefined`
        return undefined;
}