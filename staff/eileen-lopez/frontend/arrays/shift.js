function shift (array){
    var deletedElement = array[0]

    //['a', 'b', 'c', 'd', 'e']
    //['b', 'b', 'c', 'd', 'e']
     //['b', 'c', 'c', 'd', 'e']
   //['b', 'c', 'd', 'd', 'e']
    //['b', 'c', 'd', 'e', 'e']

    for(var i=0; i < array.length - 1; i++){
        array[i] = array[i + 1]
    }

    array.length--
    // ['b', 'c', 'd', 'e']


    return deletedElement
}