import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel;
  constructor() {
    this.usuario = new UsuarioModel();
  }

  ngOnInit() {}

  login(forma: NgForm) {
    if (forma.invalid) {
      return;
    }
    console.log(this.usuario);
    console.log(forma);
  }
}
