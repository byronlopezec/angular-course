// ============== Objetos
let avenger = {
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
let { nombre: nombreAvenger, clave, poder } = avenger;

console.log(nombreAvenger, clave, poder);
// ============= Arreglos
let avengers: string[] = ["Thor", "Ironman", "Tanos"];
let [, , posicion3] = avengers;

console.log(posicion3);
