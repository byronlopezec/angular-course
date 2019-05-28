import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(forma: NgForm) {
    if (forma.invalid) {
      return;
    }
    this.auth.registrarUsuario(this.usuario).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      },
    );
  }
}
