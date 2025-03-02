
const btn = document.querySelector("button");

btn.addEventListener("click", updateName);

function updateName(){
    alert("Pagina Dinamica")
    let nombre = prompt("Ingresa un Nombre: ")
    btn.textContent = "Nombre: " + nombre;
    
}
console.log("prueba1");