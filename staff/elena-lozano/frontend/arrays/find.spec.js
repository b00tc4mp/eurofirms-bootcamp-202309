//EJEMPLO 4: Nombres de 5 letras

var names = ["Manuel", "Isabel", "Eileen", "David", "Elena", "Katherine", "Martina", "Ignacio"]
    //Le decimos que aplique el find y definimos la función que contiene las instrucciones. Declaramos la variable "found", para que almacene el valor que tiene que devolver, asi luego la "invocamos"

    var found = find(names, function(name){
        //especificamos lo que queremos que haga la función y devuelve true
        if(name.length === 4) return true
        //si no lo cumple, devuelve false
        return false

    })
    console.log(found)
