import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-artista",
  templateUrl: "./artista.component.html",
  styles: []
})
export class ArtistaComponent {
  artista: any;
  verLoading: boolean;
  constructor(private router: ActivatedRoute, private spotifyServer: SpotifyService) {
    this.verLoading = true;
    this.router.params.subscribe(data => {
      this.getArtist(data.id);
    });
  }

  getArtist(id: string) {
    this.spotifyServer.getArtist(id).subscribe((artista: any) => {
      console.log("TCL: ArtistaComponent -> getArtist -> artista", artista);
      this.artista = artista;
      this.verLoading = false;
    });
  }
}
