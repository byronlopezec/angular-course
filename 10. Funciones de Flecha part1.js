var miFuncion = function (a, b) {
    return a + b;
};
// Función Flecha
var miFuncionFlecha = function (a, b) {
    return a + b;
};
var miFuncion2 = function (nombre) {
    return nombre.toUpperCase();
};
var miFuncion2Flecha = function (nombre) {
    return nombre.toUpperCase();
};
console.log(miFuncion(20, 60));
console.log(miFuncionFlecha(20, 60));
console.log(miFuncion2("Funcion normal param:string"));
console.log(miFuncion2Flecha("Funcion flecha param:string"));
