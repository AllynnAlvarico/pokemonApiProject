import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {
  pokemon_name: string | undefined = '';

  constructor() { }
  setSendName(name: string | undefined) {
    this.pokemon_name = name;
    /** input test */
    console.log("Hi I am search bar service line 38 Search Service");
    console.log("the set name is " + this.pokemon_name + " Line 39 Search Service");
    /** input test */
  }
  getDataSearch(): string | undefined {
    /** input test */
    console.log("Hi I am search bar service line 16 I am pikachu!");
    return 'pikachu';//test if it is communicating with pokemon component.
    /** input test */
    // return this.pokemon_name;
  }
}
