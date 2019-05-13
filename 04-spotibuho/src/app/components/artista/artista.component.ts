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
  topTracks: any;
  verLoading: boolean;
  constructor(private router: ActivatedRoute, private spotifyServer: SpotifyService) {
    this.verLoading = true;
    this.router.params.subscribe(params => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtist(id: string) {
    this.spotifyServer.getArtist(id).subscribe((artista: any) => {
      console.log("TCL: ArtistaComponent -> getArtist -> artista", artista);
      this.artista = artista;
      this.verLoading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotifyServer.getTopTracks(id).subscribe(topTracks => {
      this.topTracks = topTracks;
      this.verLoading = false;
      console.log("TCL: ArtistaComponent -> getTopTracks -> topTracks", topTracks);
    });
  }
}
