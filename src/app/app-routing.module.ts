import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent} from "./nav-bar/nav-bar.component";
import { ConnexionComponent } from "./connexion/connexion.component";
import { ListePraticiensComponent } from "./liste-praticiens/liste-praticiens.component";
import { ListeSpecialitesComponent } from './liste-specialites/liste-specialites.component';
import { Praticien } from "./metier/Praticien";
import { Specialite } from "./metier/Specialite";

const routes: Routes = [
  { path: '', redirectTo: '/connexion', pathMatch:'full' },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'home', component: NavBarComponent },
  { path: 'listePraticiens', component: ListePraticiensComponent},
  { path: 'specialitesPraticien/:id', component: ListeSpecialitesComponent},
  { path: 'addSpecialite', component: ListeSpecialitesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
