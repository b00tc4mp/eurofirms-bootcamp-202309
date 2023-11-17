//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

Arroz.prototype.filter = function (callback){
    const arrayResult = [];

    for (let i = 0; i < this.length; i++) {
        const element = this[i];

        let result = callback(element);
        if(result){
        arrayResult[arrayResult.length] = element;
        }

    }
    return arrayResult;
}