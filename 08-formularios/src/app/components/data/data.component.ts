import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent {
  forma: FormGroup;
  constructor() {
    this.forma = new FormGroup({
      nombre: new FormControl('Byron'),
      apellido: new FormControl(),
      correo: new FormControl(),
    });
  }

  guardar() {
    console.log(': DataComponent -> formGroup', this.forma);
    console.log(': DataComponent -> formGroup', this.forma.value);
  }
}
