let jugador = 0;
let pc = 2;
jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");
/* alert("Elejiste " + jugador); */

if (jugador == 1) {
    alert("Elejiste piedra")
} else if(jugador == 2){
    alert("Elejiste Papel")
} else if (jugador ==3){
    alert("Elejiste Tijera")
} else{
    alert("Elejiste PERDER!!!")
}
