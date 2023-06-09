import {Component, OnInit} from '@angular/core';
import {PraticienService} from "../service/praticien.service";
import {SpecialiteService} from "../service/specialite.service";
import {RechercheService} from "../service/recherche.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";
import {Praticien} from "../metier/Praticien";
import {Specialite} from "../metier/Specialite";


@Component({
  selector: 'app-rechercher',
  templateUrl: './rechercher.component.html',
  styleUrls: ['./rechercher.component.css']
})
export class RechercherComponent implements OnInit {

  public mesPraticiens!: Praticien[];
  public mesSpecialites!: Specialite[];
  private error: string = "";
  public titre: string = "Recherche d'un praticien par nom ou spécialité";
  public recherche!: string;

  constructor(private unServiceRecherche: RechercheService, private unRouteur: Router, private activatedRoute: ActivatedRoute) {
    let httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }

  ngOnInit(): void {
    // this.recherche = +this.activatedRoute.snapshot.paramMap.get('recherche');
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        this.recherche = params.get('recherche')!;
      }
    );
    this.recherchePraticien(this.recherche);
    this.rechercheSpecialite(this.recherche);
  }

  recherchePraticien(recherche: string): void {
    this.unServiceRecherche.postSearchPraticien(recherche).subscribe(
      (praticien) => {
        this.mesPraticiens = praticien;
      },
      (error) => { this.error = error.messages; }
    )
  }

  rechercheSpecialite(recherche: string): void {
    this.unServiceRecherche.postSearchSpecialite(recherche).subscribe(
      (specialite) => {
        this.mesSpecialites = specialite;
      },
      (error) => { this.error = error.messages; }
    )
  }

  specialites(idPraticien: number): void {
    this.unRouteur.navigate(['/specialites/', idPraticien]);
  }


}
