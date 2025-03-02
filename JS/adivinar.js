//Numero Aleatorio
let numeroA = Math.floor(Math.random() * 10) + 1;

//Variables a Usar
let Mensaje = document.getElementById('mensaje');
let Guess = document.getElementById('guess');
let input = document.getElementById('check');
let reset = document.getElementById('reset');
let resultado = document.getElementById('resultado');
let intentos = 0;

//Boton iniciar
input.addEventListener('click',function(){
    const GuessInput = Number(Guess.value);
    intentos++;
    if(!GuessInput){
        Mensaje.textContent = 'Numero Invalido';
    }
   /*else if(intentos > 3){
        input.disabled = true;
        resultado.textContent = 'Superaste el Limite de Intentos... (4)';
    }*/ 
    
    else if( GuessInput === numeroA){
        Mensaje.textContent = 'Adivinaste!!';
        resultado.textContent = `Lo Lograste!`;
        input.disabled = true;
        Swal.fire({
            title: "Custom width, padding, color, background.",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
    });
    } else if( GuessInput > numeroA){
        Mensaje.textContent = ' El numero es mas Pequeño'; 
    } else{
        Mensaje.textContent = ' El numero es mas Grande';
    }
});

//Boton Reiniciar
reset.addEventListener('click', function(){
    input.disabled = false;
    intentos = 0;
    numeroA = Math.floor(Math.random() * 10) + 1;
    Mensaje.textContent = 'Adivina entre el 1 al 10!';
    resultado.textContent = '';
    input.value = '';
});