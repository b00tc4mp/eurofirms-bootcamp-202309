function includes (array, searchElement){
    for(i = 0; i < array.length; i++){
        var element = array[i]

        if (element === searchElement)
        return true
    }
    
    return false
    
}