var Avenger = /** @class */ (function () {
    //Inicializar variables o ejecutar codigo antes que nuestra clase sea utilizada
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger("Antman", "cap", "Scott Lang");
console.log(antman); // imprime // Avenger {}
