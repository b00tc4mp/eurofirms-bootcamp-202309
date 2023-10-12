// REGISTER VIEW, div que contiene la página con el formulario de registro
// declaramos una variable, "registerView", para el div que contiene el formulario de registro con el id register-view en el html
var registerView = document.getElementById('register-view')

// le damos un estilo display none, a la variable "registerView", para que no aparezca la pagina de registro
registerView.style.display = 'none'

// NAVIGATION TO LOGIN, enlace a la pagina de login <a>
// declaramos una variable para el enlace a login con el id login-link en el html
var loginLink = registerView.querySelector('#login-link')

// le aplicamos el metodo onclick al enlace a login en el formulario de registro
loginLink.onclick = function (event) {

// le decimos que deje de cargar la página por defecto
    event.preventDefault()

// hacemos que desaparezca el formulario de registro y que aparezca el de login
    registerView.style.display = 'none'
    loginView.style.display = ''
}

// SUBMIT FOR REGISTER, entregar el registro, enviar el registro
//declaramos una variable, "registerForm", para el formulario de registro con id register-form en el html
var registerForm = registerView.querySelector('#register-form')

// le aplicamos el método onsubmit (ya que es un formulario)
registerForm.onsubmit = function (event) {

// le decimos que deje de cargar la página por defecto
    event.preventDefault()

// declaramos 3 variables para los campos de los inputs nombre, email y contraseña que tengan los id name-register, email-register, password-register en el html
    var nameInput = registerForm.querySelector('#name-register')
    var emailInput = registerForm.querySelector('#email-register')
    var passwordInput = registerForm.querySelector('#password-register')

// declaramos 3 variables para obtener el valor de los inputs nombre, email y contraseña, ahora en las variables nameInput, emailInput y passwordInput, introducidos por el usuario
    var name = nameInput.value
    var email = emailInput.value
    var password = passwordInput.value



// declaramos una variable usuarioEncontrado, "foundUser", y le asignamos un valor nulo, vacío
var foundUser = null

// creamos un bucle for para recorrer el array usuarios
for (var i = 0; i < users.length; i++) {

    // declaramos una variable usuario para que vaya recogiendo las iteraciones del for en el array usuarios al recorrerlo
    var user = users[i]

    // condición if, si el valor del email de un usuario, dentro del array usuarios, es estrictamente igual al valor del campo email, del login, introducido por el usuario, usuario encontrado 
    if (user.email === email) {
        foundUser = user

        //para, ya está
        break
    }
}

  // si la variable usuario encontrado no es nula, alerta: las credenciales son erroneas
  if (foundUser !== null) {
    alert('Wrong credentials')
// y salimos de la función con return
    return
}




// ahora declaramos una variable usuario y le asignamos un valor de OBJETO vacío
    var user = {}

// le agregamos al objeto vacio usuario, "user", las propiedades nombre, email y contraseña y les asignamos los valores de los inputs nombre, email y contraseña introducidos por el usuario
    user.name = name
    user.email = email
    user.password = password

// le decimos que guarde esos valores agregados del nombre, email y contraseña, que ahora están en la variable usuario, "user", en el array usuarios, "users"
    users.push(user)

//limpiamos los valores de los campos del formulario de registro
    nameInput.value = ''
    emailInput.value = ''
    passwordInput.value = ''

// hacemos que desaparezca el formulario de registro y aparezca el de login
    registerView.style.display = 'none'
    loginView.style.display = ''
}