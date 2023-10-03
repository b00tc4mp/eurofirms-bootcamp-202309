
/* const LOGIN = document.getElementById('envio');

LOGIN.onsubmit = ( function (event){

             event.preventDefault();
             let email = document.getElementById('email').value;
            // console.log(email);
             let password = document.getElementById('password').value;
            // console.log(password);
            console.log('Hello login', email, password);

            alert('Usted se ha logueado');

            location.href ='home.html';

});*/

// Código del curso

const registerForm = document.getElementById("login");

   registerForm.onsubmit = function (event) {
      
      event.preventDefault();

      const email = event.target.email.value;
      const password = event.target.password.value;

      console.log(" Hello login ", email, password);

      alert(" Usted ha sido logueado");

      location.href = 'home.html'
   }