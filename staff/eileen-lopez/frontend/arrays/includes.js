function includes (array, searchElement){
    for(i = 0; i < array.length; i++){
        var element = array[i]

        if (element === searchElement)
        return true
    }
    
    return false
    
}

Arroz.prototype.includes = function (searchElement) {
    for (let i = 0; i < this.length; i++) {
        const element = this [i]

        if (element ===searchElement)
            return true
    }

    return false
}