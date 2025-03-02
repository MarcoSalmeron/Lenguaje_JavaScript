function acierto(lasTarjetas) {
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("acertada");
  });
  document.querySelector("#sonido-acierto").play();
  puntos = 20;
  totalPuntos += puntos;
  document.querySelector('#mostrar-puntos').innerText = totalPuntos;
  
}

function error(lasTarjetas) {
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("error");
  });

  document.querySelector("#sonido-error").play();

  setTimeout(function() {
    lasTarjetas.forEach(function(elemento) {
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
    });
  }, 1000);
}
