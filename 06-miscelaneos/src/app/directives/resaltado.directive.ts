import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  @Input('appResaltado') nuevoColor: string;

  constructor(private elr: ElementRef) {}

  @HostListener('mouseenter') mouseSelected() {
    this.cambiarColor(this.nuevoColor || 'black');
  }

  @HostListener('mouseleave') mouseOutput() {
    this.cambiarColor(null);
  }

  cambiarColor(color: string) {
    this.elr.nativeElement.style.backgroundColor = color;
  }
}
