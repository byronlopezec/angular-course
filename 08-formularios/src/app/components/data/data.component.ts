import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent {
  forma: FormGroup;

  constructor() {
    this.forma = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(5)]),
      correo: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]),
    });
  }

  guardar() {
    console.log(': DataComponent -> formGroup', this.forma.value);
    console.log(': DataComponent -> formGroup', this.forma);
  }
  isInvalid(entrada: string): string {
    const isTouched = this.forma.controls[entrada].touched;
    const error = this.forma.controls[entrada].errors;
    if (!isTouched || error === null) {
      return '';
    } else {
      const tipo = Object.keys(error) + '';
      return this.getMessageError(tipo);
    }
  }
  isValid(entrada: string) {
    const isTouched = this.forma.controls[entrada].touched;
    const error = this.forma.controls[entrada].errors;
    return isTouched && !error;
  }

  getMessageError(tipo: string): string {
    if (tipo === 'required') {
      return 'Campo requerido';
    }
    if (tipo === 'minlength') {
      return 'Se permiten minimo 5 caracteres';
    }
    if (tipo === 'pattern') {
      return 'Correo no encontrado';
    }
    return '';
  }
}
