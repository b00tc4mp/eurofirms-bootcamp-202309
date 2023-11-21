// Declaramos la función forEach para enlazarla con la del spec (llamada mediante el callback)
function forEach(array, callback) {
    //iterar cada elemento del array (poner un for)
    //llamar al callback con cada elemento; cada vez que se recoja un elemento,lo enviamos al callback
    /*for (var i = 0; i < array.length; i++){
        var element = array[i]
        callback(element)
          }

}
*/

//según l@s compis
function find (array, callback) {
    for (var i = 0; i < array.length; i++){
    var element = array[i]
    var result = callback (element)
    if (result) return element
    }
}
