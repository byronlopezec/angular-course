import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  // Permite inyectar el servicio en el modulo root de angular
  // ya no es necesario importarlo en Providers: []; dentro de app.module.ts
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer " +
        "BQCIWb-9SFDdlDJUhnnvQxRYlV0fB_69Nj-Xs8CDG2QeD1UW8robNytR-CIqH21vUPSbNYCU7OE2N0k7Mvc"
    });
    return this.http
      .get("https://api.spotify.com/v1/browse/new-releases", {
        headers
      })
      .pipe(
        map((data: any) => {
          console.log(data);
          return data.albums.items;
        })
      );
  }

  getArtists(termino: string) {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer " +
        "BQCIWb-9SFDdlDJUhnnvQxRYlV0fB_69Nj-Xs8CDG2QeD1UW8robNytR-CIqH21vUPSbNYCU7OE2N0k7Mvc"
    });

    return this.http.get(
      `https://api.spotify.com/v1/search?query=${termino}&type=artist&market=EC&offset=5&limit=15`,
      { headers }
    ).pipe(map((data: any) => {
      return data.artists.items;
    }));
  }
}
