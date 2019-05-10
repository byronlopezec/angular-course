import { Component } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent {
  nuevasCanciones: any[];
  viewLoading: boolean;

  constructor(private spotify: SpotifyService) {
    this.viewLoading = true;

    this.spotify.getNewReleases().subscribe(data => {
      this.viewLoading = false;
      this.nuevasCanciones = data;
      console.log(this.nuevasCanciones);
    });
  }
}
