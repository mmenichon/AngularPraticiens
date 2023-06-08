import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {Visiteur} from "../metier/Visiteur";
import {VisiteurService} from "../service/visiteur.service";


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  public titre : string = 'Connexion';
  public userLogin! : string;
  public userMdp! : string;
  public lblLogin : string = 'Entrez votre mot de passe : ';
  public lblMessage! : string;
  public estCache : boolean = true;
  public unVisiteur : Visiteur = new Visiteur();
  private error : string = '';

  constructor(private unVS: VisiteurService, private routeur : Router) { }

  ngOnInit(): void {
  }

  valider(): void {
    this.unVisiteur = new Visiteur();
    this.unVisiteur.login_visiteur = this.userLogin;
    this.unVisiteur.pwd_visiteur = this.userMdp;
    this.unVisiteur.id_visiteur = 0;

    this.unVS.getLogin(this.unVisiteur).subscribe(
      (visiteur) => {
        this.unVisiteur = visiteur;
        if (this.unVisiteur.id_visiteur != 0) {
          alert("Authentification réussie !");
          localStorage.setItem('id', (this.unVisiteur.id_visiteur).toString());
          this.routeur.navigate(['/home']);
        } else {
          alert("Erreur d'appel !");
        }
      },
      (error) => {
        this.error = error.messages;
      });
  }
}
