//Decoradores son solo funciones!!!
function consola(constructor: Function) {
  console.log(constructor);
}
@consola
class Villano {
  constructor(public nombre: string, public plan: string) {}
}
//   nombre: string;
//   plan: string;

//   constructor(nombre: string, plan: string) {
//     this.nombre = nombre;
//     this.plan = plan;
//   }
//Lo anterior es lo mismo que lo siguiente
