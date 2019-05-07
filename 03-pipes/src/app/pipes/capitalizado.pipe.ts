import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "capitalizado" })
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas: boolean = true): string {
    value = value.toLocaleLowerCase();
    let values = value.split(" ");

    if (todas) {
      // let result = "";
      for (let i in values) {
        values[i] = values[i][0].toUpperCase() + values[i].slice(1);
        //   result += values[i] + " ";
      }
    } else {
      values[0] = values[0][0].toUpperCase() + values[0].slice(1);
    }
    return values.join(" ");
  }
}
