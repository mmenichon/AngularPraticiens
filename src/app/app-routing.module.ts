import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent} from "./nav-bar/nav-bar.component";
import { ConnexionComponent } from "./connexion/connexion.component";
import { ListePraticiensComponent } from "./liste-praticiens/liste-praticiens.component";
import { ListeSpecialitesComponent } from './liste-specialites/liste-specialites.component';
import {RechercherComponent} from "./rechercher/rechercher.component";
import {ModifierService} from "./service/modifier.service";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'home', component: NavBarComponent },
  { path: 'listePraticiens', component: ListePraticiensComponent},
  { path: 'specialitesPraticien/:id', component: ListeSpecialitesComponent},
  { path: 'addSpecialite', component: ListeSpecialitesComponent},
  { path: 'postSearch/:recherche', component: RechercherComponent},
  { path: 'updateSpecialite/:idP/:idS', component: ModifierService}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
