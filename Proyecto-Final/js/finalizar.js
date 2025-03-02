function finalizar() {
  clearInterval(cronometro);
  if (nivelActual < niveles.length - 1) {
    document.querySelector("#subeNivel").classList.add("visible");
    document.querySelector("#sonido-ganaste").play();
  
    
  } else {
    document.querySelector("#endGame").classList.add("visible");
    document.querySelector("#sonido-ganaste").play();
    
  }
}
