import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

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

    let peticion: Observable<any>;

    Swal.fire({ title: 'Espere', text: 'Guardando información', type: 'info', allowOutsideClick: false });
    Swal.showLoading();

    if (this.heroe.id) {
      peticion = this.heroesService.actualizarHeroe(this.heroe);
    } else {
      peticion = this.heroesService.crearHeroe(this.heroe);
    }

    peticion.subscribe((response: any) => {
      this.heroe = response;
      Swal.fire({ title: this.heroe.nombre, text: 'Actualizado con exito', type: 'success' });
    });
  }
}
