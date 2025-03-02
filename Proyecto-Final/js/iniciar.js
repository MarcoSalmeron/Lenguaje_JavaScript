function iniciar() {
  movimientos = 0;
  reparteTarjetas(niveles[nivelActual].tarjetas);
  document.querySelector("#mov").innerText = "00";
  maxContador();
  document.querySelector(".selecciona-nivel").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#timeOver").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");

  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir);
  });

  if (modoDificil) {
    iniciaCronometro();  
  }else {
    document.querySelector("#cronometro").classList.add("cronometro-oculto");
  }
}

function reiniciar() {
  nivelActual = 0;
  puntos = 0;
  totalPuntos = 0;
  document.querySelector('#mostrar-puntos').innerText = 0;
  actualizaNivel();
  iniciar();
}
//Seleccionar Main para insertar Estilos
let mesa = document.getElementById("principal");

function iniciaJuegoDificil() {
  modoDificil = true;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();
  document.querySelector(".control-nivel").classList.add("control-oculto");
  mesa.style.backgroundImage = "url(https://usagif.com/wp-content/uploads/gif/outerspace-77.gif)";
  mesa.style.backgroundSize = "cover";
  mesa.style.backgroundPosition = "center";
  mesa.style.backgroundRepeat = "no-repeat";
}
function iniciaJuegoNormal(){
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();
  document.querySelector(".control-nivel").classList.add("control-oculto");
  mesa.style.backgroundImage = "url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGNjbmU2eDg2OWlyb3B4Nnh5eGRpcmc2YmZjbWd5Nmt1bjhzdnk2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oGRFkoGqqLVycWg9y/giphy.webp)";
  mesa.style.backgroundSize = "cover";
  mesa.style.backgroundPosition = "center";
  mesa.style.backgroundRepeat = "no-repeat";
}
function iniciaJuegoRelax() {
  modoRelax = true;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();
  mesa.style.backgroundImage = "url(https://4.bp.blogspot.com/-PmeYmdBCL90/Uxjj9XZdFPI/AAAAAAAB-HY/U-icnyIppGw/s1600/Paisajes+de+playas+%252829%2529.gif)";
  mesa.style.backgroundSize = "cover";
  mesa.style.backgroundPosition = "center";
  mesa.style.backgroundRepeat = "no-repeat";
}
