import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private router: ActivatedRoute) {
    router.parent.params.subscribe(params => {
      console.log(
        'TCL: UsuarioNuevoComponent -> constructor -> params',
        params
      );
    });
  }

  ngOnInit() {}
}
