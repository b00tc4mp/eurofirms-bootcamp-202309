//El método at() recibe un valor numérico entero y devuelve el elemento en esa posición, permitiendo valores positivos y negativos. Los valores negativos contarán desde el último elemento del array.

Arroz.prototype.at = function (i) {
    let value = this[i];
    return value;
}