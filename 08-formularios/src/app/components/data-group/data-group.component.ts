import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-group',
  templateUrl: './data-group.component.html',
  styleUrls: ['./data-group.component.css'],
})
export class DataGroupComponent {
  forma: FormGroup;

  usuario: object = {
    nombreCompleto: {
      nombre: '',
      apellido: '',
    },
    correo: '',
    pasaTiempos: [],
  };

  constructor() {
    this.forma = new FormGroup({
      nombreCompleto: new FormGroup({
        nombre: new FormControl('', [Validators.required, Validators.minLength(5), this.sinespacios]),
        apellido: new FormControl('', [Validators.required, Validators.minLength(5), this.sinespacios]),
      }),
      correo: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]),
      pasaTiempos: new FormArray([new FormControl('', [Validators.required])]),
      usuario: new FormControl('', Validators.required, this.existeUsuario),
      password1: new FormControl('', Validators.required),
      password2: new FormControl(),
      // password2: new FormControl('', [this.noiguales.bind(this.forma)]),
    });

    this.forma.get('password2').setValidators([Validators.required, this.noiguales.bind(this.forma)]);
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'buhobit') {
          resolve({ yaexisiteusuario: true });
        } else {
          resolve(null);
        }
      }, 3000);
    });

    return promesa;
  }

  noiguales(control: FormControl): { [s: string]: boolean } {
    const forma: any = this;
    if (control.touched && control.value !== forma.get('password1').value) {
      return { noiguales: true };
    }
    return null;
  }

  // Crear validaciones
  sinespacios(control: FormControl): { [s: string]: boolean } {
    const valor = control.value + '';

    if (valor.lastIndexOf(' ') >= 0) {
      return { sinespacios: true };
    }

    return null;
  }

  // Agregar elmento a mi FormArray
  nuevoPasatiempo() {
    (this.forma.get('pasaTiempos') as FormArray).push(new FormControl('', Validators.required));
  }

  guardar() {
    console.log(': DataComponent -> formGroup', this.forma.value);
    console.log(': DataComponent -> formGroup', this.forma);
    this.forma.reset(this.usuario); //  mejor Manera
    // No gran opcion para resetear
    // this.forma.get('nombreCompleto').setValue({ nombre: '', apellido: '' });
    // this.forma.get('correo').setValue('');
  }

  isInvalid(control: FormControl): string {
    if (control.untouched || control.valid || !control.errors) {
      return '';
    } else {
      const tipo = Object.keys(control.errors)[0] + '';
      return this.getMessageError(tipo);
    }
  }

  isValid(control: FormControl) {
    return control.touched && control.valid;
  }

  getMessageError(tipo: string): string {
    if (tipo === 'yaexisiteusuario') {
      return 'El usuario ya se ecuentra registrado!';
    }
    if (tipo === 'required') {
      return 'Campo requerido';
    }
    if (tipo === 'minlength') {
      return 'Se permiten minimo 5 caracteres';
    }
    if (tipo === 'sinespacios') {
      return 'Ningun dato con espacios es aceptado';
    }
    if (tipo === 'pattern') {
      return 'Correo no encontrado';
    }
    if (tipo === 'noiguales') {
      return 'Las contraseñas no coinciden';
    }
    return '';
  }
}
