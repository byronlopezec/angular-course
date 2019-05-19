import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  usuario: object;

  constructor() {
    this.usuario = {
      nombre: '',
      apellido: '',
      correo: '',
    };
  }

  ngOnInit() {}

  guardar(forma: NgForm) {
    console.log('TemplateComponent -> guardar -> forma', forma);
    console.log('Out: TemplateComponent -> guardar -> forma.value', forma.value);
    console.log('Out: TemplateComponent -> usuario', this.usuario);
  }
}
