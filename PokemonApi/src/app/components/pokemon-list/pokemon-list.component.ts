import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: false,
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.loading = true;
    this.error = null;
    
    this.pokemonService.getPokemonList(20, 0).subscribe({
      next: (data: Pokemon[]) => {
        this.pokemons = data;
        this.loading = false;
      },
      error: (err: Error) => {
        this.error = err.message;
        this.loading = false;
        console.error('Error en el componente:', err);
      }
    });
  }

  getPokemonImage(pokemon: Pokemon): string {
    return pokemon.sprites?.other?.['official-artwork']?.front_default || 
           pokemon.sprites?.front_default || 
           'assets/placeholder.png';
  }

  getPokemonTypes(pokemon: Pokemon): string {
    return pokemon.types?.map(t => t.type.name).join(', ') || 'Sin tipos';
  }

  getPokemonAbilities(pokemon: Pokemon): string {
    return pokemon.abilities?.map(a => a.ability.name).join(', ') || 'Sin habilidades';
  }

  getMainStat(pokemon: Pokemon): string {
    const stat = pokemon.stats?.find(s => s.stat.name === 'hp');
    return stat ? stat.base_stat.toString() : 'N/A';
  }

  getPokemonHeight(pokemon: Pokemon): string {
    return pokemon.height ? (pokemon.height / 10).toString() : 'N/A';
  }

  getPokemonWeight(pokemon: Pokemon): string {
    return pokemon.weight ? (pokemon.weight / 10).toString() : 'N/A';
  }
}