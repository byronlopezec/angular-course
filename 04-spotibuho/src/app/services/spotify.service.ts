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
        "BQDI6JlPCzJQMc09FQae1XnZX8WPsRTI4P3X866vXvQfBSod5i-ADyrLZ5moOODW761csasdKosKLUR9Reg"
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
    return this.getQuery(`search?query=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => {
        return data.artists.items;
      })
    );
  }
}
