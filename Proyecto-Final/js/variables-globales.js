var modoRelax = false;
var modoDificil = false;
var nombre;
var puntos = 0;
var totalPuntos = 0;
var movimientos = 0;
var cronometro;
var grupoTarjetas = [
  ["🦄", "🍦"],
  ["🌈", "👽"],
  ["👾", "🤖", "👹", "👺"],
  ["🤡", "💩", "🎃", "🙀"],
  ["☠️", "👾", "😽", "😼"]
];
var nivelActual = 0;
var niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 3
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 8
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 12
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3]
    ),
    movimientosMax: 25
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4]
    ),
    movimientosMax: 60
  }
];

alert("Ingresa tu Nombre antes de Jugar (opcional)");

let parrafo = document.getElementById('jugador');
parrafo.addEventListener('click', updateName);
let player = document.getElementById('mostrar-jugador');

function updateName(){
  nombre = prompt("Ingresa tu nombre de Jugador: ");
  if (nombre){
  parrafo.textContent = "Player: "+ nombre;
  player.textContent = 'Player: '+ nombre;
  this.nombre = nombre;
  } else{
    alert("No puedes dejar el Nombre Vacio");
  }
}
player.textContent = 'Player 1';