import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <p [appResaltado]="'black'">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi ut
      ipsam in iusto impedit iste fuga consectetur dicta sapiente mollitia
      velit, architecto voluptatibus minus cum quidem. Ipsam et ullam
      accusantium.
    </p>
    <app-clases></app-clases>
    <hr />
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
