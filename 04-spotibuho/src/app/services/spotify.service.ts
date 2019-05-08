import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

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
        "Bearer BQClq-WK9fAGiicrWEKOJo9Q1JEuvpVlgUH3GYKXne3NnzZjyOErkYXFvLTU9vYyFxYk95PAC0o_Hce9DAY"
    });
    this.http
      .get("https://api.spotify.com/v1/browse/new-releases", { headers })
      .subscribe(data => {
        console.log(data);
      });
  }
}
