import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private POKE_API = 'https://pokeapi.co/api/v2/pokemon';
  private POSTMAN_DELAY_API =
    'https://9d90842f-48df-4db0-ad76-603b700d8f46.mock.pstmn.io/';

  getDitto() {
    return this.http.get(`${this.POKE_API}/ditto`);
  }

  getDelayApi() {
    /**
     * Check how to create a server mock to delay request
     * https://blog.postman.com/using-mock-servers-throughout-the-api-lifecycle/
     */
    return this.http.get(`${this.POSTMAN_DELAY_API}/api-delay-pokemon`);
  }
}
