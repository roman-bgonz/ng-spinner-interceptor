import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private POKE_API = 'https://pokeapi.co/api/v2/pokemon';

  getDitto() {
    return this.http.get(`${this.POKE_API}/ditto`);
  }

  getCharizard() {
    return this.http.get(`${this.POKE_API}/charizard`).pipe(delay(2000));
  }
}
