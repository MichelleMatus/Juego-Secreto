let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMax = 10;

function asignarTextoElemento(elemento, texto) {
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}
function VerificarIntento() {
let numeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);

if (numeroDeUsuario === numeroSecreto) {
asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
document.getElementById('reiniciar').removeAttribute('disabled');
} else { 
    if (numeroDeUsuario > numeroSecreto) {
    asignarTextoElemento('p','El numero secreto es menor');
} else {
    asignarTextoElemento('p','El numero secreto es mayor');
}
intentos++;
limpiarCaja();
}

}
function limpiarCaja(){
    let valorCaja = document.querySelector('#ValorUsuario');
    valorCaja.value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;
console.log(numeroGenerado);
console.log(listaNumerosSorteados);

if (listaNumerosSorteados.length == numeroMax){
    asignarTextoElemento('p', 'Ya se han sorteado todos los numeros posibles');
} else {

if (listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
} else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}
}
}


function condicionesIniciales() {
asignarTextoElemento('h1', 'Juego del numero secreto!');
asignarTextoElemento('p', 'Indica un numero del 1 al 10');
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}

function reiniciarJuego(){

    limpiarCaja();

    condicionesIniciales();

    document.querySelector('#reiniciar').setAttribute('disabled' , 'true');
}

condicionesIniciales();