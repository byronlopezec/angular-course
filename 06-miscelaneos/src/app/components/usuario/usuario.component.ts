import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  constructor(private router: ActivatedRoute) {
    router.params.subscribe((params: any) => {
      console.log('TCL: UsuarioComponent -> constructor -> params', params);
    });
  }

  ngOnInit() {}
}
