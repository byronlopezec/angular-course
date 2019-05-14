import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  // <p style="font-size: 12px;">
  // <p [ngStyle]="{ 'font-size': '16px' }">
  // <p [ngStyle]="{ 'font-size': tamano + 'px' }">
  // <p [style.fontSize.px]="tamano">
  template: `
    <p [style.fontSize.px]="tamano">
      [Style.fontSize.px]="tamano" 30px
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5"><i class="fa fa-plus"></i></button>
    <button class="btn btn-primary" (click)="tamano = tamano - 5"><i class="fa fa-minus"></i></button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tamano: number;
  constructor() {
    this.tamano = 30;
  }

  ngOnInit() {}
}
