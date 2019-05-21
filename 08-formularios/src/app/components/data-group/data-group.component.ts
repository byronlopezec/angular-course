import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-group',
  templateUrl: './data-group.component.html',
  styleUrls: ['./data-group.component.css'],
})
export class DataGroupComponent {
  forma: FormGroup;

  constructor() {
    this.forma = new FormGroup({
      nombreCompleto: new FormGroup({
        nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
        apellido: new FormControl('', [Validators.required, Validators.minLength(5)]),
      }),
      correo: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]),
    });
  }

  guardar() {
    console.log(': DataComponent -> formGroup', this.forma.value);
    console.log(': DataComponent -> formGroup', this.forma);
  }

  isInvalid(control: FormControl): string {
    if (control.untouched || control.valid) {
      return '';
    }
    const tipo = Object.keys(control.errors) + '';
    return this.getMessageError(tipo);
  }

  isValid(control: FormControl) {
    return control.touched && control.valid;
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
