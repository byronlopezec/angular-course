interface Xmen {
  name: string;
  poder: string;
}
// function enviarMision(xmen: { name: string }) {
//   console.log("Enviando a: " + xmen.name);
// }
function enviarMision(xmen: Xmen) {
  console.log("Enviando a: " + xmen.name);
}

let wolverin: Xmen = {
  name: "Wolverine",
  // nombre: "Wolverine", me daria error porque no cumple con la interface
  poder: "regeneracion"
};

//Argument of type '{ nombre: string; poder: string; }'
//is not assignable to parameter of type '{ name: any; }'.
enviarMision(wolverin);
