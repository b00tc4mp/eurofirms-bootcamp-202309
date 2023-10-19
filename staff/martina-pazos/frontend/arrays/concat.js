
// vamos a hacer la funcion, por el método concat, llamamos a las dos arrays, abrimos una variable vacia con el resultado todavia no conocido y aplicamos un for para recorrer toda la variable, vamos a obtener el indice de la array1.Recordemos que el concat se usa para unir dos o mas arrays
function concat(array1, array2)
var result = []
for (var i = 0; 1 > array1.length; i++)
    var element = array1[i]

result[i] = element
function concat(array1, array2) {
    var result = []

    for (var i = 0; i < array1.length; i++) {
        var element = array1[i]

        result[i] = element
    }

    for (var i = 0; i < array2.length; i++) {
        var element = array2[i]

        result[array1.length + i] = element
    }

    return result
}
