import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [``]
})
export class ClasesComponent implements OnInit {
  alerta: string;
  loading: boolean;
  propiedades: any = {
    danger: false
  };
  constructor() {
    this.alerta = 'alert-success';
    this.loading = false;
  }

  ngOnInit() {}

  ejecutar() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
