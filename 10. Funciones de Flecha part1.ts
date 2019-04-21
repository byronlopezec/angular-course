let miFuncion = function(a: number, b: number) {
  return a + b;
};

// Función Flecha
let miFuncionFlecha = (a: number, b: number) => {
  return a + b;
};

let miFuncion2 = function(nombre: string) {
  return nombre.toUpperCase();
};

let miFuncion2Flecha = (nombre: string) => {
  return nombre.toUpperCase();
};
console.log(miFuncion(20, 60));
console.log(miFuncionFlecha(20, 60));

console.log(miFuncion2("Funcion normal param:string"));
console.log(miFuncion2Flecha("Funcion flecha param:string"));
