import {Component, OnInit} from '@angular/core';
import {Specialite} from "../metier/Specialite";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";
import {ModifierService} from "../service/modifier.service";

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  public titre: string = "Modifier une spécialité";
  public idPraticien!: number;
  public idSpecialite!: number;
  public ancienneSpe!: number;
  public specialitesNonAffectees!: Specialite[];
  private error: string = "";


  constructor(private unServiceModifier: ModifierService, private unRouteur: Router, private activatedRoute: ActivatedRoute) {
    let httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }

  ngOnInit(): void {
  }

  getSpecialitesNonAffectees(idPraticien: number): void {
    this.unServiceModifier.getSpecialitesNonAffectees(idPraticien).subscribe(
      (specialite) => {
        this.specialitesNonAffectees = specialite;
      }, (error) => { this.error = error.messages; }
    )
  }

  // updateSpecialite(idSpecialite: number): void {
  //   this.unServiceModifier.postUpdateSpecialite().subscribe(
  //     () => {
  //       window.location.reload()
  //     }, (error) => { this.error = error.messages; }
  //   )
  // }

  updateSpecialite(idSpecialite: number): void {
    const idAncienneSpe = this.ancienneSpe; // Remplace "ancienneSpe" par la variable contenant l'ancienne spécialité

    this.unServiceModifier.postUpdateSpecialite(this.idPraticien, idAncienneSpe, idSpecialite).subscribe(
      () => {
        this.unRouteur.navigate(['/specialitesPraticien/', this.idPraticien]);
      },
      (error) => {
        this.error = error.messages;
      }
    );
  }

}
