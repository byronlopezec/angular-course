import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Heroe, HeroesService } from "../../services/heroes.service";

@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html"
})
export class BuscadorComponent implements OnInit {
  @Input() heroes: Heroe[] = [];
  termino: string;
  constructor(
    private _heroesService: HeroesService,
    private _activatedRouter: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._activatedRouter.params.subscribe(params => {
      this.termino = params["termino"];
      this.heroes = this._heroesService.encontrarHeroes(params["termino"]);
    });
  }

  verHeroe(idx: number) {
    this._router.navigate(["/heroe", idx]);
  }
}
