let jugador = 0;
let pc = 2;
jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");
/* alert("Elejiste " + jugador); */

if (jugador == 1) {
    alert("Elejiste 🪨")
} else if(jugador == 2){
    alert("Elejiste 📄")
} else if (jugador ==3){
    alert("Elejiste ✂️")
} else{
    alert("Elejiste PERDER!!!")
}

if (pc == 1) {
    alert("PC Eleje 🪨")
} else if(pc == 2){
    alert("PC Eleje 📄")
} else if (pc ==3){
    alert("PC Eleje ✂️")
} else{
    alert("Elejiste PERDER!!!")
}

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
