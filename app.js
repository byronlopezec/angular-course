//no se puede poner los valores obligatorios al final
function activar(quien, objeto, momento // parametro obcional siempre alfinal
) {
    if (objeto === void 0) { objeto = "batisenial"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activo la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activo la " + objeto;
    }
    console.log(mensaje);
}
activar("Gordon", "batisenial", "tarde");
