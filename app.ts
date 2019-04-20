let nombre: string = "Pepito";
let numero: number = 123;
let booleano: boolean = true;
let hoy: Date = new Date();

hoy = new Date("2019-04-20");

console.log(hoy);

let cualquiera: any;
cualquiera = hoy;
cualquiera = booleano;
cualquiera = numero;
cualquiera = nombre;

console.log(cualquiera);

let spiderman = {
  nombre: "Peter",
  edad: 20
};


spiderman = {
	nombre: "PArker",
	edad: 18
}