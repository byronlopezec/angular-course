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
        "Bearer " +
        "BQAxw-HCbNRfcofi2-oBEMEQv6fBquHxTqoZrizbthZfc98VMfse2VWGGB0_s5vqbddW3Hc_Z5_51T6mieg"
    });
    return this.http.get("https://api.spotify.com/v1/browse/new-releases", {
      headers
    });
  }
}
