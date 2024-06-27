import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from "@angular/forms";
import { PokemonComponent } from './pokemon/pokemon.component';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {SearchBarService} from "./header/search-bar.service";

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HeaderComponent
  ],
  providers: [provideHttpClient(),SearchBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
