import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-tarjetas",
  templateUrl: "./tarjetas.component.html",
  styles: []
})
export class TarjetasComponent implements OnInit {
  @Input() items: [];

  constructor(private router: Router) {}

  ngOnInit() {}

  verArtista(item: any) {
    let artistId: string;
    if (item.artists) {
      artistId = item.artists[0].id;
      console.log(item.artists);
    } else {
      artistId = item.id;
    }
    this.router.navigate(["/artista/", artistId]);
  }
}
