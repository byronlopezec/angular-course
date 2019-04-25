import { Component } from "@angular/core";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html"
})
export class BodyComponent {
  mostrar: boolean = true;
  frase: any = {
    autor: "Ben Parker",
    mensaje: "Un gran poder requiere una gran responsabalidad"
  };

  personajes: string[] = ["Spiderman", "Venom", "Dr. Octopus"];
}
