import { Villano, Xmen } from "./clases/index";
class Avenger {
  nombre: string;
  equipo: string;
  nombreReal: string;

  puedePelear: boolean;
  peleasGanadas: number;

  //Inicializar variables o ejecutar codigo antes que nuestra clase sea utilizada
  constructor(nombre: string, equipo: string, nombreReal: string) {
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
  }
}

let antman: Avenger = new Avenger("Antman", "cap", "Scott Lang");

console.log(antman); // imprime // Avenger {}

let wolverine: Xmen = new Xmen("Logan", "Wolverine");
let lex: Villano = new Villano("Lex Luttor", "Acabar con los Xmens XD");

console.log(wolverine.imprimir());
console.log(lex.imprimir());
