import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { async } from "@angular/core/testing";
import { __await } from "tslib";
@Injectable({
  // Permite inyectar el servicio en el modulo root de angular
  // ya no es necesario importarlo en Providers: []; dentro de app.module.ts
  providedIn: "root"
})
export class SpotifyService {
  token: string;
  constructor(private http: HttpClient) {}

  getNewToken() {
    const clientId = "50b46bb143d3462ba0c34096536dfd87";
    const clientSecret = "843009689dcf45338286c479d2ad2965";
    const url = `http://localhost:3000/spotify/${clientId}/${clientSecret}`;

    return this.http.get(url).pipe(
      map((data: any) => {
        this.token = data.access_token;
        return data.access_token;
      })
    );
  }

  getQuery(ruta: string) {
    const url = `https://api.spotify.com/v1/${ruta}`;

    const headers = new HttpHeaders({
      Authorization: "Bearer " + this.token
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases").pipe(
      map((data: any) => {
        // console.log("From Services: " + data);
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
