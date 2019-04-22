let hulk = {
    nombre: "Hulk",
    smash() {
        console.log(this.nombre + " smash!!");
    }
};
let hulkFlecha = {
    nombre: "Hulk",
    smash() {
        //Cuando se ejecuta un setTimeout el this apunta el windows o variable global,
        //lo resuelvo usando función de flecha
        setTimeout(function () {
            console.log(this.nombre + " smash!!");
        }, 2000);
        setTimeout(() => {
            console.log(this.nombre + " smash!!");
        }, 2000);
    }
};
hulk.smash();
hulkFlecha.smash();
