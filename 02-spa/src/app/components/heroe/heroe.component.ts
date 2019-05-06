import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  heroe: Heroe

  constructor(private _activatedRouter: ActivatedRoute, private _heroesService: HeroesService) {
    this._activatedRouter.params.subscribe((params) => {
      // console.log(params);
      this.heroe = _heroesService.getHeroe(params['id'])
    })
  }

  ngOnInit() {
  }

}
