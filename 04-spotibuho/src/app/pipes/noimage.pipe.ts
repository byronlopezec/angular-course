import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "noimage"
})
export class NoimagePipe implements PipeTransform {
  transform(value: any[]): any {
    if (value.length === 0) {
      return "assets/img/noimage.png";
    }
    return value[0].url;
  }
}
