// Uso de Let y Const
let nombre: string = "Ricardo Tapia";
let edad: number = 23;
const PERSONAJE: { nombre: string; edad: number } = {
  nombre: nombre,
  edad: edad
};
console.log(PERSONAJE);

// Cree una interfaz que sirva para validar el siguiente objeto
interface Batman {
  nombre: string;
  artesMarciales: string[];
}
var batman: Batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};

// Convertir esta funcion a una funcion de flecha
function resultadoDoble(a, b) {
  return (a + b) * 2;
}

const resultadoDobleFlecha = (a: number, b: number) => {
  return (a + b) * 2;
};
console.log(resultadoDobleFlecha(3, 4));

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre: string, arma: string = "arco", poder?: string) {
  var mensaje;
  if (poder) {
    mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  } else {
    mensaje = nombre + " tiene un " + arma;
  }
  console.log(mensaje);
}
getAvenger("Thanos", "guante", "polverizar");
getAvenger("Thanos");

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo {
  constructor(public base: number, public altura: number) {}

  calcularArea(): number {
    return this.base * this.altura;
  }
}

let figura = new Rectangulo(4, 6);

console.log(
  `El rectangulo de lados: ${figura.base} y ${
    figura.altura
  } tiene de Area: ${figura.calcularArea()}`
);
