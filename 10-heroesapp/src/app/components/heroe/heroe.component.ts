import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [],
})
export class HeroeComponent implements OnInit {
  heroe: HeroeModel = new HeroeModel();
  constructor() {}

  ngOnInit() {}

  guardar(forma: NgForm) {
    if (forma.invalid) {
      console.log('Formulario no valido');
      return;
    }

    console.log(this.heroe);
    console.log(forma);
  }
}
