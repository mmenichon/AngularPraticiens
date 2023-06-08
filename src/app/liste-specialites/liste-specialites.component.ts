import {Component, OnInit} from '@angular/core';
import { Specialite } from "../metier/Specialite";
import { SpecialiteService } from "../service/specialite.service";
import { ActivatedRoute, Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-liste-specialites',
  templateUrl: './liste-specialites.component.html',
  styleUrls: ['./liste-specialites.component.css']
})
export class ListeSpecialitesComponent implements OnInit {

  public mesSpecialites: Specialite[] = [];
  public specialitesNonAffectees!: Specialite[];
  private error: string = "";
  public titre: string = "Liste des spécialités";
  public idPraticien!: number;
  public idSpecialite!: number;

  constructor(private unServiceSpecialite: SpecialiteService, private unRouteur: Router, private activatedRoute: ActivatedRoute) {
    let httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }

  ngOnInit(): void {
    //@ts-ignore
    this.idPraticien = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getListeSpecialitesParPraticien(this.idPraticien);
    this.getSpecialitesNonAffectees(this.idPraticien);
  }

  getListeSpecialitesParPraticien(id: number): void {
    this.unServiceSpecialite.getListeSpecialitesParPraticien(id).subscribe(
      (specialite) => {
        this.mesSpecialites = specialite;
      }, (error) => { this.error = error.messages; }
    )
  }

  getSpecialitesNonAffectees(idPraticien: number): void {
    this.unServiceSpecialite.getSpecialitesNonAffectees(idPraticien).subscribe(
      (specialite) => {
        this.specialitesNonAffectees = specialite;
      }, (error) => { this.error = error.messages; }
    )
  }

  addSpecialite(idSpecialite: number): void {
    this.unServiceSpecialite.postAddSpecialite(idSpecialite, this.idPraticien).subscribe(
      () => {
        this.unRouteur.navigate(['/specialitesPraticien/', this.idPraticien]);
      }, (error) => { this.error = error.messages; }
    )
  }

  deleteSpecialite(idSpecialite: number): void {
    this.unServiceSpecialite.postDeleteSpecialite(this.idPraticien, idSpecialite).subscribe(
      () => {
        window.location.reload()
      },
      (error) => { this.error = error.messages; }
    )
  }

  // updateSpecialite(idPraticien: number, idSpecialite: number): void {
  //   this.unRouteur.navigate(['/updateSpecialite'])
  // }
}
