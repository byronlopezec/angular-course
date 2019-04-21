// ============== Objetos
var avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;
//Lo anterior se puede simplificar en:
// let { nombre, clave, poder } = avenger;
// y si quiero puedo darle un alias
var nombreAvenger = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
console.log(nombreAvenger, clave, poder);
// ============= Arreglos
var avengers = ["Thor", "Ironman", "Tanos"];
var posicion3 = avengers[2];
console.log(posicion3);
