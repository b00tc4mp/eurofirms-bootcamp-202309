// lo que se pretende aqui es que los datos introducidos en el formulario queden guardados cuando se le da al botón de register
// recuerda que al formulario de registro le hemos asignado el id "register-form"
const registerForm = document.getElementById("register-form")
// creamos una variable (const) y la denominamos "registerForm". El "document" hace referencia al documento HTML que nos interesa, en este caso, donde está "register-form". El punto (.) es para acceder a las propiedades de ese documento y "getElementById" sirve para traer el trozo de código identificado como "register-form".

//Tenemos la variable que hemos creado arriba (registerForm), con el punto (.) le damos una propiedad (onsubmit) que hace que se llame a la función y que esta haga un evento. Este event es un objeto que crea JS cuando le damos al boton REGISTER.
registerForm.onsubmit = function(event) {
//Ahora hacemos que la página no actue por defecto (que es recargándola cuando le damos al submit).
    event.preventDefault()
//ahora extraemos los datos del formulario
// En el HTML, cada input tiene un id. Creamos una variable que recoja el valor del objetivo (target). Le decimos al programa qué target es con su respectiva id
    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value
//Una vez haya almacenado los datos del formulario y se ha realizado el registro, que vaya a la página del LOGIN
    location.href = "login.html"

    
}


