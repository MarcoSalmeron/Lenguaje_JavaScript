// Escribimos los niveles dinámicamente
escribeNiveles();

// Asignamos eventos iniciales
document.querySelectorAll(".reiniciar").forEach(function(elemento) {
  elemento.addEventListener("click", reiniciar);
});
document
  .querySelector("#juego-dificil")
  .addEventListener("click", iniciaJuegoDificil);
  document
  .querySelector("#juego-normal")
  .addEventListener("click", iniciaJuegoNormal);
document
  .querySelector("#juego-relax")
  .addEventListener("click", iniciaJuegoRelax);
document
  .querySelector("#control-nivel")
  .addEventListener("click", muestraMenuNiveles);
document
  .querySelector("#cierra-niveles")
  .addEventListener("click", ocultaMenuNiveles);

document.querySelectorAll(".nivel").forEach(function(elemento) {
  elemento.addEventListener("click", cambiaNivel);
});

document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);

document.querySelector("body").addEventListener("click", clickFueraDeMenu);

document.addEventListener("keydown", teclaEscCierraMenu);

//Mostramos pantalla de bienvenida
document.querySelector("#bienvenida").classList.add("visible");

let regresar = document.getElementById('regresar');
regresar.addEventListener('click',muestraMenuNiveles);



