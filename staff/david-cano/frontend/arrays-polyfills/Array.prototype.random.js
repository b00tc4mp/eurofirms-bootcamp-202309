Array.prototype.random = function (){
    var randomIndex = Math.round((this.length - 1) * Math.random());

    var element = this[randomIndex];

    return element;
}