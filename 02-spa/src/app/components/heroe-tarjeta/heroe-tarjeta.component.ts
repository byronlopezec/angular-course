import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroe-tarjeta",
  templateUrl: "./heroe-tarjeta.component.html"
})
export class HeroeTarjetaComponent implements OnInit {
  //Inputs
  @Input() heroe: any;
  @Input() idx: number;
  //Outputs
  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor(private _router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {}

  verHeroe() {
    this.heroeSeleccionado.emit(this.idx);
  }
}
