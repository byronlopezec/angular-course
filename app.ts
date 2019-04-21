//no se puede poner los valores obligatorios al final
function activar(
  quien: string,
  objeto: string = "batisenial",
  momento?: string // parametro obcional siempre alfinal
) {
  let mensaje: string;
  if (momento) {
    mensaje = `${quien} activo la ${objeto} en la ${momento}`;
  } else {
    mensaje = `${quien} activo la ${objeto}`;
  }
  console.log(mensaje);
}

activar("Gordon", "batisenial", "tarde");
