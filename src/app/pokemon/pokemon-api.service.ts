import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pokemon } from "pokenode-ts";


@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
  private pokemonApiUrl = 'https://pokeapi.co/api/v2';

  constructor(
    private http: HttpClient
  ) { }
  getPokemon(name: string | undefined): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokemonApiUrl}/pokemon/${name}`);
  }
}
