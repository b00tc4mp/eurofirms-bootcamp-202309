/*
const SUBMIT = document.getElementById('register-form');

SUBMIT.onsubmit = function (event) {

      event.preventDefault();
      let nombre = document.getElementById('nombre').value;
     // console.log(nombre);
      let correo = document.getElementById('correo').value;
     // console.log(correo);
      let clave = document.getElementById('clave').value;
     // console.log(clave);
      console.log('Hello register', nombre, correo, clave);

      alert('Usted ha sido registrado');

      location.href = 'login.html';
}
*/

// Código del curso

const registerForm = document.getElementById("register_form2");

   registerForm.onsubmit = function (event) {
      
      event.preventDefault();

      const name = event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;

      console.log(" Hello register ", name, email, password);

      alert(" Usted ha sido registrado");

      location.href = 'login.html'
   }

