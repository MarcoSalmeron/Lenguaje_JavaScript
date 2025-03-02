function gameOver() {
  clearInterval(cronometro);
  document.querySelector("#gameOver").classList.add("visible");
  document.querySelector('#sonido-perdiste').play();
  let perdiste = document.getElementById('perdiste-mov');
  if(nombre){
  perdiste.textContent = 'Te has quedado sin movimientos, '+nombre+'😭';
  document.querySelector('.puntos').textContent = 'Maximo de puntos: '+totalPuntos;
  } else{
    perdiste.textContent = 'Te has quedado sin movimientos 😭';
    document.querySelector('.puntos').textContent = 'Maximo de puntos: '+totalPuntos;
  }
}

function timeOver() {
  document.querySelector("#timeOver").classList.add("visible");
  document.querySelector('#sonido-perdiste').play();
  let perdiste = document.getElementById('perdiste-tiempo');
  let p = document.getElementById('m-puntos');
  if(nombre){
  perdiste.textContent = 'Te has quedado sin tiempo, '+nombre+'😭';
  p.textContent = 'Maximo de puntos: '+totalPuntos;
  console.log('perdiste');
  } else{
    perdiste.textContent = 'Te has quedado sin tiempo 😭';
    p.textContent = 'Maximo de puntos: '+totalPuntos;
    console.log('perdiste2');
  }
}
