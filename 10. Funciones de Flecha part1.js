let miFuncion = function (a, b) {
    return a + b;
};
// Función Flecha
let miFuncionFlecha = (a, b) => {
    return a + b;
};
let miFuncion2 = function (nombre) {
    return nombre.toUpperCase();
};
let miFuncion2Flecha = (nombre) => {
    return nombre.toUpperCase();
};
console.log(miFuncion(20, 60));
console.log(miFuncionFlecha(20, 60));
console.log(miFuncion2("Funcion normal param:string"));
console.log(miFuncion2Flecha("Funcion flecha param:string"));
