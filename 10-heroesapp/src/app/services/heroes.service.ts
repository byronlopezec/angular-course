import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  url = 'https://heroesapp-e73e3.firebaseio.com';

  constructor(private http: HttpClient) {}

  crearHeroe(heroe: HeroeModel): Observable<HeroeModel> {
    return this.http.post(`${this.url}/heroes.json`, heroe).pipe(
      map((response: any) => {
        heroe.id = response.name;
        return heroe;
      }),
    );
  }
  actualizarHeroe(heroe: HeroeModel): Observable<HeroeModel> {
    const heroeTemp = { ...heroe };
    delete heroeTemp.id;
    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp).pipe(
      map((response: any) => {
        heroe = { ...heroe, ...response };
        return heroe;
      }),
    );
  }
}
