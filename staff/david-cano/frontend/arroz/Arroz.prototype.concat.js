Arroz.prototype.concat = function () {
    let result = new Arroz();

    for (let i = 0; i < this.length; i++) {
        result[result.length] = this[i];
        result.length++;
    }

    for (let i = 0; i < arguments.length; i++){
        const argument = arguments[i]; 
        for(let j = 0; j < argument.length; j++){
        result[result.length] = argument[j];
        result.length++
        }
    }
    return result;
}