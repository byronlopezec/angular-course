import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Pipe({ name: "domseguro" })
export class DomSeguroPipe implements PipeTransform {
  constructor(private domSanatizer: DomSanitizer) {}

  transform(value: string, url: string): SafeResourceUrl {
    console.log(url + value);
    return this.domSanatizer.bypassSecurityTrustResourceUrl(url + value);
  }
}
