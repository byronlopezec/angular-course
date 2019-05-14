import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [``]
})
export class ClasesComponent implements OnInit {
  alerta: string;

  propiedades: Object = {
    danger: false
  };
  constructor() {
    this.alerta = 'alert-success';
  }

  ngOnInit() {}
}
