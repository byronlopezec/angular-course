import { Component, OnInit } from '@angular/core';
// ng g c components/usuario/usuarioNuevo --spec=false -it -is --flat;
@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
