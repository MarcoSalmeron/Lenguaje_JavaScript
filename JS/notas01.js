//Tipos de datos primitivos
//numericos
var edad = 25;
var pi = 30.1416;
//Cadenas (String)
var nombre = "Juan";
var direccion = "Calle principal, 123";
//Boolenos
var esMayorDeEdad = true;
var tienePermiso = false;
//Null
var apellido = null;
//Undefined
var telefono;


//Variables de tipo Objeto
var persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    obtenerNombre: function(){
        return this.nombre + " " + this.apellido;
    }
};
//Areglos o Arrays
var numeros = [1,2,3,4,5];
var nombres = ["Ana", "Maria", "Pedro"];

//Funciones
function sumar(a, b){
    return a + b;
}

//JSON
var usuario = {
    "nombre": "Juan",
    "edad": 25,
    "direccion": {
        "calle": "calle principal",
        "numero": 1
    },
    "telefonos": ["2301450302", "4510316489"]
}

//ESto es un string
var persona = '{"nombre": "Juan", "edad": 25,"direccion": {"calle": "calle principal", "numero": 1},  "telefonos": ["2301450302", "4510316489"]}';
//Aqui convertimos el String en un objeto JSON
var personaJson = JSON.parse(persona);

console.log(personaJson.nombre)  //Imprime "juan"
console.log(personaJson.telefonos[0]) //Imprime "2301450302"

var personaObjeto = {
    "nombre": "Juan",
    "edad": 25,
    "direccion": {
        "calle": "calle principal",
        "numero": 1
    },
    "telefonos": ["2301450302", "4510316489"]
};

var personas = JSON.stringify(personaObjeto); 
console.log(personas)  //Imprime la cadena que corresponde al objeto JSON

//Areglos o Arrays
var nombres = ["Ana", "Maria", "Pedro"];
var apellidos = ["Ana","Perez", "Zamora", "Cruz", "Ana"];
nombres.push("Antonia"); //Agrega un ele,nto al final
console.log(nombres[0]);
console.log(nombres.length);
console.log(nombres);
nombres.pop();  //Elimina el ultimo elemento del arreglo
console.log(nombres);
nombres.shift();  //Elimina el primer elemento del arreglo
console.log(nombres);
nombres.unshift("Fatima");  //agrega un ele,nto al inicio
console.log(nombres);
nombres.splice(2, 0, "Fernanda");
console.log(nombres);
nombres.splice(2, 1);
console.log(nombres);
var nuevo_arreglo = nombres.concat(apellidos);
console.log(nuevo_arreglo);
let arreglo = nuevo_arreglo.slice(1,3);
console.log(arreglo);
var indice = nuevo_arreglo.indexOf("Cruz");
console.log(indice);
var indice1 = nuevo_arreglo.lastIndexOf("Ana");
console.log(indice1);
var cadena = nuevo_arreglo.join("-");
console.log(cadena);
nuevo_arreglo.sort()  //Orden alos elementos d eun arreglo
console.log(nuevo_arreglo);
nuevo_arreglo.reverse();  //Invierte el orden
console.log(nuevo_arreglo);

//Diferencias entre var y let
function ejemplo(){
    console.log(nombre);   //Devuelve undefined
    var nombre = "Juan";
    console.log(nombre);  //Devuelve 'Juan'
}
ejemplo();

/*
function ejemplo(){
    console.log(nombre);   //Devuelev error--
    let nombre = "Juan";
    console.log(nombre);  //Devuelve 'Juan'
}
ejemplo();

*/
//Operadores atritmeticos
let r1 = 2 + 4;
let r2 = 2 -1;

//operadores de Asignacion
let v1 = "Juan";
let v2 = 30;

//Operadores de comparacion
let result = 2 == 2;
let result1 = 3 != 6;

//COncatenacion
let saludo = "Hola" + " Mundo";

let cadena1 = "Hola";
let cadena2 = " Mundo";
let mensaje = cadena1.concat(cadena2,"!");
console.log(mensaje);

console.log(mensaje.length)
console.log(mensaje.charAt(3));
console.log(mensaje.substring(0,3));
console.log(mensaje.indexOf("Mundo"));
console.log(mensaje.replace("Mundo", "Amigos"));
console.log(mensaje.toUpperCase());
console.log(mensaje.toLowerCase());
console.log(mensaje.split(" "))

let mensaje1 = "       Hola, Mundo!                   ";
let mensaje_limpio = mensaje1.trim();
console.log(mensaje_limpio);

let subcadena1 = mensaje_limpio.slice(0, 4);
console.log(subcadena1);
let subcadena2 = mensaje_limpio.slice(5);
console.log(subcadena2);

let subcadena3 = mensaje_limpio.slice(-6);
console.log(subcadena3);

