import {Component, EventEmitter, Output} from '@angular/core';
import {SearchBarService} from "./search-bar.service";
import {PokemonApiService} from "../pokemon/pokemon-api.service";
import {Pokemon} from "pokenode-ts";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  // hostDirectives: []
  imports: [
    FormsModule
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // @Output() testText = new EventEmitter<string>();
  input_name: string | undefined = '';
  pokemonObj: Pokemon | undefined;
  constructor(
    private searchBar: SearchBarService,
    private pokeService: PokemonApiService
  ) {}
  // testSearch(event: any){
  //   this.testText.emit(event.target.value);
  //   console.log("Hello Bitch I am an Event!");
  // }
  onSubmit(){
    // debugger
    console.log("Hello I am header component! Line 15");
    if (this.input_name !== '' || this.input_name !== null){
      this.searchBar.setSendName(this.input_name);
      /** input test */
      // debugger
      // console.log("There is no input " + this.input_name + " Line 29");
      /** input test */
    } else {
      this.searchBar.setSendName('ditto');
      /** input test */
      // debugger
      // this.searchBar.getDataSearch();
      // console.log("the Input Name is " + this.input_name + " Line 23");
      /** input test */
    }
      console.log("the Input Name is " + this.input_name + " Line 36 in Header Component ts");
    }
    // )

  }

  // protected readonly Component = Component;
  // protected readonly PokemonComponent = PokemonComponent;
// }
