import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userToken: string;
  private url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
  private apikey = 'AIzaSyDq_Pc4aUMhIFEdqBfdjom6qQwkQzhn_Ks';
  // rest Signup registrarUsuario
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]
  // rest Signin ingresar
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]
  constructor(private http: HttpClient) {
    this.leerToken();
  }

  logout() {
    localStorage.removeItem('token');
  }
  login(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true,
    };

    return this.http.post(`${this.url}/verifyPassword?key=${this.apikey}`, authData).pipe(
      map((response: any) => {
        const { idToken } = response;
        console.log(idToken);
        this.guardarToken(idToken);
        return response;
      }),
    );
  }

  registrarUsuario(usuario: UsuarioModel) {
    // const authData = {
    //   email: usuario.email,
    //   pasword: usuario.password,
    //   returnSecureToken: true,
    // }; con el operador spread mejor ...
    const authData = {
      ...usuario,
      returnSecureToken: true,
    };

    return this.http.post(`${this.url}/signupNewUser?key=${this.apikey}`, authData).pipe(
      map((response: any) => {
        const { idToken } = response;
        localStorage.setItem('token', idToken);
        return response;
      }),
    );
  }

  guardarToken(token: string) {
    localStorage.setItem('token', token);
    const hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('expiraDate', hoy.getTime().toString());
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
  }

  estaAutenticado() {
    if (this.userToken.length < 2) {
      return false;
    }

    const expiraDate = Number(localStorage.getItem('expiraDate'));

    if (expiraDate > new Date().getTime()) {
      return true;
    } else {
      console.log('Expira date', expiraDate);
      console.log(new Date().getTime());
      return false;
    }
  }
}
