let inputEmail = document.getElementById("email");

let button = document.getElementById("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmail(inputEmail.value);
});

function validateEmail(email) {
  /*Esto es para verificar si el correo contiene un arroba(@)*/
  let expReg =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  //* el método test verifica si el correo electrónico contiene un "@" y devuelve true o false según el caso.
  if (expReg.test(email) == true) {
    inputEmail.style.border = "1px solid hsl(223, 87%, 63%)";
    error.style.visibility = "hidden";
    inputEmail.value = "";
  } else {
    inputEmail.style.border = "1px solid red";
    error.style.visibility = "visible";
  }
}

//*En JavaScript, las expresiones regulares se crean utilizando la notación /.../
