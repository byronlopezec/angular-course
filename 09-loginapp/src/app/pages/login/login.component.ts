import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel;
  constructor(private auth: AuthService) {
    this.usuario = new UsuarioModel();
  }

  ngOnInit() {}

  login(forma: NgForm) {
    if (forma.invalid) {
      return;
    }

    this.auth.login(this.usuario).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      },
    );
  }
}
