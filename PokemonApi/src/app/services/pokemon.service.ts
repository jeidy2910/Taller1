import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';
import { PokemonListResponse } from '../models/pokemon-response.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemonList(limit: number = 20, offset: number = 0): Observable<Pokemon[]> {
    return this.http.get<PokemonListResponse>(`${this.apiUrl}?limit=${limit}&offset=${offset}`)
      .pipe(
        switchMap((response: PokemonListResponse) => {
          // Crear array de observables para obtener el detalle de cada Pokémon
          const detailRequests = response.results.map((pokemon) => 
            this.http.get<Pokemon>(pokemon.url)
          );
          // Ejecutar todas las peticiones en paralelo
          return forkJoin(detailRequests);
        }),
        map((pokemons: Pokemon[]) => {
          // Ordenar por ID
          return pokemons.sort((a, b) => a.id - b.id);
        }),
        catchError((error) => {
          console.error('Error fetching Pokémon:', error);
          return throwError(() => new Error('Error al cargar los Pokémon. Por favor, intenta de nuevo.'));
        })
      );
  }
}