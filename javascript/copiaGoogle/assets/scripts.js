function buscar (form) {

  let busqueda = form.busca.value;

  location.assign("https://www.google.com.mx/search?q=" + busqueda);

}

function suerte (form) {

  let busqueda = form.busca.value;

  location.assign("https://google.com/search?&btnI=1&q=" + busqueda);
}

const search = document.querySelector('#seach-input');

search.addEventListener('keypress', function(event) {


  if(event.keyCode == 13){
    event.preventDefault();
    const busqueda = event.target.form;
    toGoogle (busqueda);
  }
});
