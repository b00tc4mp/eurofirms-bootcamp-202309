// DATA BASE, creamos una base de datos (ficticia) con un array vacío

// ingresamos 2 usuarios

// REGISTER VIEW, div que contiene la página con el formulario de registro
// declaramos una variable, "registerView", para el div que contiene el formulario de registro con el id register-view en el html

// le damos un estilo display none, a la variable "registerView", para que no aparezca la pagina de registro

// NAVIGATION TO LOGIN, enlace a la pagina de login <a>
// declaramos una variable para el enlace a login con el id login-link en el html

// le aplicamos el metodo onclick al enlace a login en el formulario de registro

// le decimos que deje de cargar la página por defecto

// hacemos que desaparezca el formulario de registro y que aparezca el de login

// SUBMIT FOR REGISTER, entregar el registro, enviar el registro
//declaramos una variable, "registerForm", para el formulario de registro con id register-form en el html

// le aplicamos el método onsubmit (ya que es un formulario)

// le decimos que deje de cargar la página por defecto

// declaramos 3 variables para los campos de los inputs nombre, email y contraseña que tengan los id name-register, email-register, password-register en el html

// declaramos 3 variables para obtener el valor de los inputs nombre, email y contraseña, ahora en las variables nameInput, emailInput y passwordInput, introducidos por el usuario

// ahora declaramos una variable usuario y le asignamos un valor de OBJETO vacío

// le agregamos al objeto vacio usuario, "user", las propiedades nombre, email y contraseña y les asignamos los valores de los inputs nombre, email y contraseña introducidos por el usuario

// le decimos que guarde esos valores agregados del nombre, email y contraseña, que ahora están en la variable usuario, "user", en el array usuarios, "users"

//limpiamos los valores de los campos del formulario de registro

// hacemos que desaparezca el formulario de registro y aparezca el de login

// LOGIN VIEW, div que contiene el formulario de login
// declaramos una variable para el div que contiene el formulario de login "loginView" con el id login-view en el html

// le damos un estilo display '' para que aparezca la pagina de login en pantalla

// NAVIGATION TO REGISTER, enlace a la pagina de registro <a>
// declaramos una variable para el enlace al registro con el id register-link en el html

// le aplicamos el metodo onclick al enlace al registro en el formulario de login

// le decimos que deje de cargar la página por defecto

// hacemos que desaparezca la página de login y aparezca la de registro

// SUBMIT FOR LOGIN, entregar el login, enviar el login
//declaramos una variable para el formulario de login con id login-form en el html

// le aplicamos el método onsubmit (pk es un formulario)

//le decimos que deje de cargar la página por defecto

// declaramos 2 variables para los campos de los inputs email y contraseña que tengan los id email-login y password-login en el html dentro del formulario de login

// declaramos 2 variables para obtener el valor de los inputs email y contraseña introducidos por el usuario en el login

// declaramos una variable usuarioEncontrado, "foundUser", y le asignamos un valor nulo, vacío

// creamos un bucle for para recorrer el array usuarios

// declaramos una variable usuario para que vaya recogiendo las iteraciones del for en el array usuarios al recorrerlo

// condición if, si el valor del email de un usuario, dentro del array usuarios, es estrictamente igual al valor del campo email, del login, introducido por el usuario, usuario encontrado 

//para, ya está

// si la variable usuario encontrado es nula, alerta: las credenciales son erroneas

// si la contraseña de algún usuario, dentro del array usuarios, no es estrictamente igual a la contraseña del campo password, del login, introducida por el usuario, alerta: las credenciales son erroneas 

// limpiamos los campos de email y contraseña del formulario de login

// hacemos desaparecer la página de login y aparece la de home

// HOME VIEW, div que contiene la página de home
// declaramos una variable "homeView", para el div que contiene el home, con el id home-view en el html

// le aplicamos un estilo display none para que no aparezca en pantalla

// declaramos una variable para el botón de loguearse, en la página del home, con un id logout-button en el html

// le aplicamos el método onclick (pk no es un formulario)

// le decimos que desaparezca el home y aparezca el login