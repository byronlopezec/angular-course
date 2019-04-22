"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Villano {
    constructor(nombre, plan) {
        this.nombre = nombre;
        this.plan = plan;
    }
    imprimir() {
        console.log(`Soy ${this.nombre} y mi plan es: ${this.plan}`);
    }
}
exports.Villano = Villano;
