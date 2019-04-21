// Templates literales

let nombre: string = "Brandom";
let apellido: string = "Lee";
let edad: number = 20;

let texto = "Hola, " + nombre + " " + apellido + " (" + edad + ")";
console.log(texto);

let texto2 = `Hola, ${nombre} ${apellido} 
// sin necesidad de agregar el caracter \n para nueva lineas
(${edad})`;

console.log(texto2);

let texto3 = `Suma: ${20 + 12}`;
console.log(texto3);

//=========== Funciones!!! =========

function resta(num2: number, num1: number) {
  return num2 - num1;
}

console.log(`la resta de 32 - 12 es: ${resta(32, 12)}`);
