import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiBaseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getlista(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/type`);
  }

  getgenere(typeUrl: string): Observable<any> {
    return this.http.get(typeUrl);
  }

  getdettagli(pokemonUrl: string): Observable<any> {
    return this.http.get(pokemonUrl);
  }
 
}
