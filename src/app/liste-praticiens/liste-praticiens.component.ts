import {Component, OnInit} from '@angular/core';
import {Praticien} from "../metier/Praticien";
import {PraticienService} from "../service/praticien.service";
import {Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-liste-praticiens',
  templateUrl: './liste-praticiens.component.html',
  styleUrls: ['./liste-praticiens.component.css']
})
export class ListePraticiensComponent implements OnInit {

  public mesPraticiens!: Praticien[];
  private error: string = "";
  private id: number = 0;
  public titre: string = "Liste des praticiens";

  constructor(private unServicePraticien: PraticienService, private unRouteur: Router) {
    let httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }

  ngOnInit(): void {
    // appel des fonctions utilisées sur la page
    this.getListePraticien();
  }

  getListePraticien(): void {
    this.unServicePraticien.getListePraticien().subscribe(
      (praticien) => {
        this.mesPraticiens = praticien;
      },
      (error) => {
        this.error = error.messages;
      }
    )
  }

  specialites(idPraticien: number): void {
    this.unRouteur.navigate(['/specialitesPraticien/', idPraticien]);
  }

}
