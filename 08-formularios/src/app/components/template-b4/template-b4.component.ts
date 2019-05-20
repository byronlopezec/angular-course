import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-b4',
  templateUrl: './template-b4.component.html',
  styleUrls: ['./template-b4.component.css'],
})
export class TemplateB4Component implements OnInit {
  usuario: object;
  paises: object;
  sexo: string[];

  constructor() {
    this.usuario = {
      nombre: '',
      apellido: '',
      correo: '',
      pais: '',
      sexo: 'Masculino',
      acepta: false,
    };
    this.sexo = ['Masculino', 'Femenino', 'Sin Definir'];

    this.paises = [
      {
        codigo: 'es',
        nombre: 'España',
      },
      {
        codigo: 'ec',
        nombre: 'Ecuador',
      },
      {
        codigo: 'us',
        nombre: 'Estados Unidos',
      },
    ];
  }

  ngOnInit() {}

  guardar(forma: NgForm) {
    console.log('TemplateComponent -> guardar -> forma', forma);
    console.log('Out: TemplateComponent -> guardar -> forma.value', forma.value);
    console.log('Out: TemplateComponent -> usuario', this.usuario);
  }
}
