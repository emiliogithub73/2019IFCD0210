window.addEventListener('load', iniciar, false);

function iniciar() {
  
  var imagen = document.getElementById('cucu');
  
  imagen.addEventListener('mouseover', peligro, false);
  imagen.addEventListener('mouseout', restaurar, false);
}

function restaurar(){
  var imagen = document.getElementById('cucu').src = "../img/atrasAzul.png";
}

function peligro() {
  var imagen = document.getElementById('cucu').src = "../img/atrasVerde.png";
}