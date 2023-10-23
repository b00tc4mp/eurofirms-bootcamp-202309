// indice positivos posiciones 
function at (array,index){
 if(index >=0) { 
var value= array[index]
return value
}
//indices negativos
var value = array[array.length + index]
return value
 }

 