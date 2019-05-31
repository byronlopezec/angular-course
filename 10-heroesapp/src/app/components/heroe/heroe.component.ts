import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [],
})
export class HeroeComponent {
  heroe: HeroeModel = new HeroeModel();

  constructor(private heroesService: HeroesService) {}

  guardar(forma: NgForm) {
    if (forma.invalid) {
      console.log('Formulario no valido');
      return;
    }

    if (this.heroe.id) {
      this.heroesService.actualizarHeroe(this.heroe).subscribe((response) => {
        console.log('Heroe actualizado: ', response);
      });
    } else {
      this.heroesService.crearHeroe(this.heroe).subscribe((response) => {
        this.heroe = response;

        console.log('Heroe insertado: ', response);
      });
    }
  }
}
