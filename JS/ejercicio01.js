//Eventos
var boton = document.getElementById("btn1");
boton.addEventListener("mouseover",function(event){
    event.stopPropagation();
    console.log("El mouse esta sobre el boton");
});
document.addEventListener("keydown",function(event){
    console.log("Se presiono la tecla: "+event.key);
})
var boton = document.getElementById("btn1");
boton.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("El boton fue clickeado");
});