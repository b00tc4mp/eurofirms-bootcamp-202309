const registerform = document.getElementById("register-form");

registerform.onsubmit = function (event) {
  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;

  console.log("hello register", name, email, password);

  alert("user register");

  location.href = "login.html";
};
