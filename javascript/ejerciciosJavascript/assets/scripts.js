function totalHorasDormidas (horaDormir,horaDespertar) {
  if (horaDormir >= horaDespertar) {
    var totalHorasDormidas = horaDespertar + (24 - horaDormir);
  } else if(horaDormir == horaDespertar) {
    var totalHorasDormidas = 24;
  }else {
    var totalHorasDormidas = horaDespertar - horaDormir;
  }

  console.log ("total horas dormidas= " + totalHorasDormidas + "horas");
}
 totalHorasDormidas(24,8);



function GastoDelSuper (precioSal,precioAzucar,precioCereal,precioArroz, precioHelado){
  GastoDelSuper = precioSal + precioAzucar + precioCereal + precioArroz + precioHelado;

  console.log ("Gasto del super es: $" + GastoDelSuper);
}
 GastoDelSuper(10,25,15,23,47);

function presupuesto (ingreso1,ingreso2,gasto1,gasto2,gasto3){
  var totalGasto = gasto1 + gasto2 + gasto3;
  var totalIngreso = ingreso1 + ingreso2;
  var presupuesto = totalIngreso - totalGasto;
  console.log ("presupuesto = $" + presupuesto )
}
 presupuesto (500,1000,400,50,120);



 function herencia (jose,juan,herencia){
  var herenciaIndividual = herencia/2;
  jose = jose + herenciaIndividual;
  juan = juan + herenciaIndividual;
  var dineroTotal = jose + juan;
  console.log ("el dinero toral es: $" + dineroTotal);
}
herencia(100,200,5000);



function ganancia (precioStartup,porcentajeSocio1,porcentajeSocio2){
  var gananciaSocio1 = precioStartup - ((precioStartup * porcentajeSocio1)/100);
  var gananciaSocio2 = precioStartup - ((precioStartup * porcentajeSocio2)/100);
  var gananciaSinIvaSocio1 = gananciaSocio1 - (gananciaSocio1 * 0.16);
  var gananciaSinIvaSocio2 = gananciaSocio2 - (gananciaSocio2 * 0.16);
  console.log ("Ganancia sin IVA para el socio 1 es: $" + gananciaSinIvaSocio1);
  console.log ("Ganancia sin IVA para el socio 2 es: $" + gananciaSinIvaSocio2);
}
ganancia(1000,30,70);


function precioLapConIva (precioLap,IVA){
  var precioLapConIva = precioLap + ((precioLap * IVA)/100)
  console.log ("Total de la computadora con Iva es: $" + precioLapConIva)
}
precioLapConIva (2000,20);


function totalPorComensal (total,numComensales,propina){
  var totalPorComensal = total / numComensales;
  var totalPorComensalMasPropina = totalPorComensal + ((totalPorComensal * propina)/100);
  console.log ("El total a pagar por comensal es: $" + totalPorComensal)
  console.log ("El total a pagar por comensal más la propina es: $" + totalPorComensalMasPropina);
}
totalPorComensal(800,4,10);
