import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
})
export class HeroesComponent implements OnInit {
  heroes: HeroeModel[];

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.heroesService.obtenerHeroes().subscribe((response) => {
      this.heroes = response;
      console.log(response);
    });
  }

  eliminar(heroe: HeroeModel, index: number) {
    Swal.fire({
      title: '¿Está seguro?',
      text: `Se eliminará a ${heroe.nombre}`,
      type: 'question',
      showCancelButton: true,
      showConfirmButton: true,
    }).then((response) => {
      if (response.value) {
        Swal.fire({
          title: 'Espere',
          text: `Eliminando a ${heroe.nombre}`,
          type: 'info',
          allowOutsideClick: false,
          showConfirmButton: false,
        });
        Swal.showLoading();

        this.heroesService.deleteHeroe(heroe.id).subscribe(() => {
          // No Mutable!!!!
          // this.heroes = this.heroes.filter((heroe: HeroeModel) => heroe.id !== id);

          // Mutable
          // si fuese -1 eliminaria ultimo elemento de un array
          if (index > -1) {
            this.heroes.splice(index, 1);
          }
          Swal.close();
        });
      }
    });
  }
}
