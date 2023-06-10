import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Specialite} from "../metier/Specialite";

@Injectable({
  providedIn: 'root'
})
export class ModifierService {

  private header = new Headers({'content-type': 'application/json'});
  private ClientUrl: string = "";

  constructor(private httpClient: HttpClient) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }

  getSpecialitesNonAffectees(idPraticien: number): Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/specialitesNonAffectees/' + idPraticien;
    return this.httpClient.get(this.ClientUrl);
  }

  // postUpdateSpecialite(uneSpecialite: Specialite): Observable<any> {
  //   this.ClientUrl = environment.ENDPOINT + 'api/updateSpecialite';
  //   console.log(this.ClientUrl);
  //   console.log(uneSpecialite);
  //   return this.httpClient.post(this.ClientUrl, uneSpecialite)
  // }

  postUpdateSpecialite(idPraticien: number, ancienneSpe: number, idSpecialite: number): Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/updateSpecialite';
    console.log(this.ClientUrl);
    console.log(idPraticien);
    console.log(ancienneSpe);
    console.log(idSpecialite);

    return this.httpClient.post(this.ClientUrl, JSON.stringify({ idPraticien, ancienneSpe, idSpecialite }));
  }

}
