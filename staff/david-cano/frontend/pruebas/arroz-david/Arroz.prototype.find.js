Arroz.prototype.find = function(callback){
    for(var i = 0; i < this.length; i++){
var element = this[i];

var result = callback(element);

if(result){
    return element;
}
    }
}