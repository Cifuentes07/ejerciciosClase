




function crea (i) {
  var piramide = document.querySelector('.piramide');
  var asteriscos = '*';
  for(var  i = 0;  i <= 1; i++){
    asteriscos += '<ul>' + asteriscos + '</ul>';
  }
  for(var  i = 0;  i <= 1; i++){
    asteriscos += '<ul>' + i + '</ul>';
  }
  piramide.innerHTML = asteriscos;
}

//   /\s/g, ''  todos /g los espacios \s los va a sustituir por nada
//gi gtodos i mayusculas o minnusculas
// const variable costantes que no va a cambiar
// let adentro de las funciones
// var variables globales para el todo el documento
function nombreCompleto (form) {
  let nombre = form.firstname.value;
  let apellido = form.lastname.value;
  console.log(nombre + ' ' + apellido);
  console.log(`${nombre} ${apellido}`);
}
