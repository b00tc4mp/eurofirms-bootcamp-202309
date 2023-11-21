const loginForm = document.getElementById("login-form")

loginForm.onsubmit = function(event){

    event.preventDefault()
//Recojo el valor de input email y se lo asigno a la constante email
    const email = event.target.email.value

// Idem para password
    const password = event.target.password.value

//con esto nos muestra los datos en consola
    console.log("Login", email, password)

//Sale una ventanita emergente muy maja
    alert("Piratas, piratas everywhere")
    
//Te lleva a la página Home
    location.href = "home.html"
}