Arroz.prototype.some = function (callback) {
    for(var i = 0; i < this.length; i++){
    var element =this[i];

    var result = callback(element);

        if(result){
        return true;
        }
    }
        return false;
}