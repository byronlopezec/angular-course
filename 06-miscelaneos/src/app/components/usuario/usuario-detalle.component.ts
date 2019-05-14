import { Component, OnInit } from '@angular/core';
// ng g c components/usuario/usuarioDetalle --spec=false -it -is --flat;
@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
