function saludar(nombre: string) {
  console.log("hola " + nombre);
}

var wolverine = {
  nombre: "Buhobit"
};
// Argument of type '{ nombre: string; }' is not assignable to parameter of type 'string'.
// saludar(wolverine);
saludar(wolverine.nombre);
