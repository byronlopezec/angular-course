import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;
  recordarme = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(forma: NgForm) {
    if (forma.invalid) {
      return;
    }
    Swal.fire({ allowOutsideClick: false, type: 'info', text: 'Espere por favor' });
    Swal.showLoading();

    this.auth.registrarUsuario(this.usuario).subscribe(
      (response) => {
        Swal.close();
        if (this.recordarme) {
          localStorage.setItem('email', this.usuario.email);
        }

        this.router.navigateByUrl('/home');
      },
      (error) => {
        Swal.fire({
          allowOutsideClick: false,
          title: 'Error al autenticar',
          type: 'error',
          text: error.error.error.message,
        });
        console.error(error);
      },
    );
  }
}
