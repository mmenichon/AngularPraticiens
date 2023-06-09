import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ConnexionComponent } from './connexion/connexion.component';
import { ListePraticiensComponent } from './liste-praticiens/liste-praticiens.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListeSpecialitesComponent } from './liste-specialites/liste-specialites.component';
import { RechercherComponent } from './rechercher/rechercher.component';
import { ModifierComponent } from './modifier/modifier.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,

    ConnexionComponent,
    ListePraticiensComponent,
    ListeSpecialitesComponent,
    RechercherComponent,
    ModifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
