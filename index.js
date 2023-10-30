function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada) {
    let resultado = "";
    if (jugada == 1) {
        resultado = "piedra 🪨"
    } else if(jugador == 2){
        resultado = "papel 📄"
    } else if (jugador ==3){
        resultado = "tijera ✂️"
    } else{
       resultado = "MAL ELEJIDO"
    }
return resultado
}

let jugador = 0;
let min = 1;
let max = 3;
let pc = aleatorio(1,3)
jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");

alert("PC elige: " + eleccion(pc));
alert("Tu eliges: " + eleccion(jugador))

if (pc == jugador){
    alert("EMPATE")
} else if(jugador == 1 && pc == 3){
    alert("GANASTE")
}else if(jugador == 2 && pc == 1){
    alert("GANASTE")
}else if(jugador == 3 && pc == 2){
        alert("GANASTE")
} else {
    alert("PERDISTE!!")
}
