let prom1 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    //Ejecutar si esta bien,
    // resolve();
    //Ejecutar si esta mal
    reject();

    console.log("Promesa terminada");
  }, 2000);
});

prom1
  .then(function() {
    console.log("Termina promesa bien!!!");
  })
  .catch(function() {
    console.log("Termina promesa mal");
  });
