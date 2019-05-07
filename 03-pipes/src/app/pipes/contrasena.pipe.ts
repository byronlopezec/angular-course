import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "contrasena" })
export class ContrasenaPipe implements PipeTransform {
  transform(value: string, mostrar: boolean = true): string {
    let numero = value.length;
    let resultado = "";
    if (!mostrar) {
      for (let i = 0; i < numero; i++) {
        resultado += "*";
      }
    } else {
      resultado = value;
    }
    return resultado;
  }
}
