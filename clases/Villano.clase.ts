export class Villano {
  nombre: string;
  plan: string;

  constructor(nombre: string, plan: string) {
    this.nombre = nombre;
    this.plan = plan;
  }

  imprimir() {
    console.log(`Soy ${this.nombre} y mi plan es: ${this.plan}`);
  }
}
