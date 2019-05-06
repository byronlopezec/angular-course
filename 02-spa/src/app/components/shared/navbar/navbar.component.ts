import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../../../services/heroes.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html"
})
export class NavbarComponent implements OnInit {
  constructor(private _heroesService: HeroesService) {}

  ngOnInit() {}

  buscarHeroe(termino: string) {
    console.log(this._heroesService.encontrarHeroes(termino));
  }
}
