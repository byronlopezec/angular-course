import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel;
  recordarme = false;

  constructor(private auth: AuthService, private router: Router) {
    this.usuario = new UsuarioModel();
  }

  ngOnInit() {
    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  login(forma: NgForm) {
    if (forma.invalid) {
      return;
    }
    Swal.fire({ allowOutsideClick: false, type: 'info', text: 'Espere por favor' });
    Swal.showLoading();

    this.auth.login(this.usuario).subscribe(
      (response) => {
        Swal.close();

        if (this.recordarme) {
          localStorage.setItem('email', this.usuario.email);
        }

        this.router.navigateByUrl('/home');
      },
      (error) => {
        Swal.fire({ allowOutsideClick: false, type: 'error', text: error.error.error.message });
        console.error(error);
      },
    );
  }
}
