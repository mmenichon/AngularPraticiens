import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Praticien} from "../metier/Praticien";
import {Specialite} from "../metier/Specialite";

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {

  private header = new Headers({'content-type': 'application/json'});
  private ClientUrl: string="";
  private uneSpecialite : Specialite = new Specialite();

  constructor(private httpClient: HttpClient) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }

  getListeSpecialitesParPraticien(id: number): Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/specialitesPraticien/' + id;
    return this.httpClient.get(this.ClientUrl);
  }


  // postAddSpecialite(idPraticien: number, idSpecialite: number): Observable<any> {
  //   this.ClientUrl = environment.ENDPOINT + 'api/addSpecialite';
  //   return this.httpClient.post(this.ClientUrl, JSON.stringify(idPraticien, idSpecialite));
  // }

  postDeleteSpecialite(idPraticien: number, idSpecialite: number): Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/deleteSpecialite';
    return this.httpClient.post(this.ClientUrl, JSON.stringify({idPraticien, idSpecialite}));
  }

  // postUpdateSpecialite(uneSpecialite: Specialite): Observable<any> {
  //   this.ClientUrl = environment.ENDPOINT + 'api/updateSpecialite';
  //   return this.httpClient.post(this.ClientUrl, uneSpecialite)
  // }

}
