import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';

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
}
