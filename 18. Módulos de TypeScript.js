"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./clases/index");
class Avenger {
    //Inicializar variables o ejecutar codigo antes que nuestra clase sea utilizada
    constructor(nombre, equipo, nombreReal) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
}
let antman = new Avenger("Antman", "cap", "Scott Lang");
console.log(antman); // imprime // Avenger {}
let wolverine = new index_1.Xmen("Logan", "Wolverine");
let lex = new index_1.Villano("Lex Luttor", "Acabar con los Xmens XD");
console.log(wolverine.imprimir());
console.log(lex.imprimir());
