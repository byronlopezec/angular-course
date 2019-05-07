import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nombre: string = "Buhobit";
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = 3.1415926535;
  porcentaje: number = 0.6146;
  dinero: number = 1225.99;
  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: "500",
    direccion: {
      calle: "Avenida Smith",
      casa: "S75"
    }
  };
}
