import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Pokemon } from 'pokenode-ts';
import {PokemonApiService} from "./pokemon-api.service";
import {SearchBarService} from "../header/search-bar.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
  pokemon_json: Pokemon | undefined;
  pokemon_name: string | undefined = '';
  pokemon_id: number | undefined;
  pokemon_type: string = '';
  official_img_url: string | undefined;
  pokemon_height: number | undefined;
  pokemon_weight: number | undefined;
  constructor(
    private pokemonAPI: PokemonApiService,
    private searchBar: SearchBarService
  ) {  }
  ngOnInit(){
    // debugger
    if (this.searchBar.getDataSearch() === '' || this.searchBar.getDataSearch() === null){
      // this.pokemon_name = "ditto"
    } else {
      this.pokemon_name = this.searchBar.getDataSearch();
    }
    this.refreshData(this.pokemon_name);
    console.log(this.pokemon_name + " I am new Line 24 and in pokemon component!");
  }

  refreshData(p_name: string | undefined): void {
    // debugger
    this.pokemonAPI.getPokemon(p_name).subscribe((json)=> {
      this.pokemon_json = json;
        this.setPokemonObject(this.pokemon_json);
        console.log(p_name + " I am new Line 27 and in pokemon component!");
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }
  setPokemonObject(pokemon_json: Pokemon){
    this.pokemon_name = pokemon_json.name;
    console.log("New Here! Line 41 Pokemon Component " + this.pokemon_name);
    this.pokemon_id = pokemon_json.id;
    this.pokemon_type = pokemon_json.types.map(type => type.type.name).toString();
    this.official_img_url = pokemon_json.sprites.other?.
      ["official-artwork"].front_default?.toString();
    this.pokemon_height = pokemon_json.height;
    this.pokemon_weight = pokemon_json.weight;
  }

}
