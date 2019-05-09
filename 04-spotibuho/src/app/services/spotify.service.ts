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

  getQuery(ruta: string) {
    const url = `https://api.spotify.com/v1/${ruta}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer " +
        "BQC9ok0Ng0l6Ii4jWp7RYhDn19F0n5noYWsUWPST1PfgLUE5HIiw2ep91ZJJ4YlY5OOZpNVsSJsOoFF80tg"
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases").pipe(
      map((data: any) => {
        console.log(data);
        return data.albums.items;
      })
    );
  }

  getArtists(termino: string) {
    return this.getQuery(
      `search?query=${termino}&type=artist&market=EC&offset=5&limit=15`
    ).pipe(
      map((data: any) => {
        return data.artists.items;
      })
    );
  }
}
