var hulk = {
    nombre: "Hulk",
    smash: function () {
        console.log(this.nombre + " smash!!");
    }
};
var hulkFlecha = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        //Cuando se ejecuta un setTimeout el this apunta el windows o variable global,
        //lo resuelvo usando función de flecha
        setTimeout(function () {
            console.log(this.nombre + " smash!!");
        }, 2000);
        setTimeout(function () {
            console.log(_this.nombre + " smash!!");
        }, 2000);
    }
};
hulk.smash();
hulkFlecha.smash();
