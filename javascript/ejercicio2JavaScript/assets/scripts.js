function apuesta(){
  var dados = document.querySelector('.apuestaDados')
  var dado1 = Math.ceil(Math.random() * 6);
  var dado2 = Math.ceil(Math.random() * 6);
  var dado3 = Math.ceil(Math.random() * 6);
  if(dado1 == dado2) {
    var mensaje = 'Ganaste un viaje!';
  } else if(dado2 == dado3) {
    var mensaje = 'Ganaste un coche!';
  } else if (dado1 == dado3) {
    var mensaje = 'Ganaste una beca';
  } else {
    var mensaje = 'perdiste, suerte para la proxima';
  }
  //console.log('dado1', dado1);
  //console.log('dado2', dado2);
  //console.log('dado3', dado3);
  //console.log(mensaje);

  dados.innerHTML =  `
  <li>Dado1: <span>${dado1}</span></li>
  <li>Dado2: <span>${dado2}</span></li>
  <li>Dado3: <span>${dado3}</span></li>
  <li><h4>${mensaje}</h4></li>
  `
}
//apuesta();
//Math.floor(9.9)redondea hacia arriba;
//Math.ceil(9.9) redondea hacia arriba;
//Math.round(9.4)redondea hacia el numero mas cercano




function hambre (hambre){
  var estadoDeAnimo = document.querySelector('.estado-de-animo');
  switch (hambre) {
    case"true":
      console.log("estoy triste");
      var mensaje = 'tengo hambre, estoy triste';
      break;
    default:
      var mensaje = 'ya comi, estoy feliz';
  }
  estadoDeAnimo.innerHTML = mensaje;
}
//hambre('true')

//var resultadoHerencia = document.querySelector('resultado-Herencia');
//resultadoHerencia.innerHTML = "el mensaje que see quiera: " + dineroTotal;

function experiencia(nivel){
  var juegos = document.querySelector('.jugador');
  var nivel
  if (nivel >= 10 & nivel <20) {
    //console.log("Nivel Acrobata");
    var mensaje = 'Vas por buen camino, eres nivel Acrobata';
  } else if (nivel >= 20) {
    //console.log('Nivel Ninja');
    var mensaje = 'Vas por buen caamino, eres nivel Ninja';
  } else {
    //console.log("Nivel Aprendiz");
    var mensaje = 'Felicidades, eres nivel Aprendiz';

  }
  juegos.innerHTML = mensaje;
}
//nivel(25);


function accesoRefrigerador (usuario,contraseña){
  var acceso = document.querySelector('.refrigerador');
  if (usuario == "Gladys") {
    if (contraseña == 1234){
      //console.log("Acceso a Refrigerador");
      var mensaje = 'Tienes acceso a refrigerador';
    } else {
      //console.log("Contraseña incorrecta");
      var mensaje = 'contraseña incorrecta';
    }
  } else {
    //console.log("usuario no existe");
    var mensaje = 'usuario no existe';
  }
  acceso.innerHTML = mensaje;
}
//accesoRefrigerador('Gladys',1240);


function promedio (exam1,exam2,exam3){
  var examenes = document.querySelector('.destino');
  var promedio = (exam1 + exam2 + exam3) / 3 ;
  if (promedio >= 8.5){
    //console.log("Destino premio");
    var mensaje = "Destino premio";
  }else {
    //console.log("Destino castigo");
    var mensaje = 'Destino castigo';
  }
  examenes.innerHTML = mensaje;
}
//promedio(8,8,10);


function dia (dia){
  var actividad = document.querySelector('.clase');
  switch (dia) {
    case ('lunes' || 'miercoles'):
      //console.log("Hoy tengo clase de historia");
      var mensaje = 'Hoy tengo clase de historia';
      break;
    case ('martes'):
      //console.log("Hoy tengo clase de natación");
      var mensaje = 'Hoy tengo clase de natación';
      break;
    case ('jueves'):
      //console.log("Hoy tengo clase de esgrima");
      var mensaje = "Hoy tengo clase de esgrima"
      break;
    default:
      //console.log("Descanso");
      var mensaje = 'Descanso :D';
  }
  actividad.innerHTML = mensaje;
}
//dia('sabado');



function castigo (num1,num2) {
  var cuenta = document.querySelector('.cuenta');
  var listaNumeros = '';
  for(var i = num1; i <= num2; i++){//i+=5 ; i-=5
    listaNumeros += '<li>' + i + '</li>';
  }
  cuenta.innerHTML = listaNumeros;
}
//regaño(70,89);


function cambioDePeso (peso,pesoIdeal){
  var etiqpeso = document.querySelector('.peso');
  var semana = 0;
  var historial = '';
  for( var cambioDePeso = peso; cambioDePeso > pesoIdeal; cambioDePeso--){
    semana = semana + 1;
    historial += '<li> tu peso ' + cambioDePeso + ' kg lo conseguiste en la semana número ' + semana + '</li>';
  }
  etiqpeso.innerHTML = historial;
}
