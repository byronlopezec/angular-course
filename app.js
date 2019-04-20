// Templates literales
var nombre = "Brandom";
var apellido = "Lee";
var edad = 20;
var texto = "Hola, " + nombre + " " + apellido + " (" + edad + ")";
console.log(texto);
var texto2 = "Hola, " + nombre + " " + apellido + " \n// sin necesidad de agregar el caracter \n para nueva lineas\n(" + edad + ")";
console.log(texto2);
var texto3 = "Suma: " + (20 + 12);
console.log(texto3);
//=========== Funciones!!! =========
function resta(num2, num1) {
    return num2 - num1;
}
console.log("la resta de 32 - 12 es: " + resta(32, 12));
