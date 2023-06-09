import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RechercheService {

  private header = new Headers({'content-type': 'application/json'});
  private ClientUrl: string="";

  constructor(private httpClient: HttpClient) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }

  postSearchPraticien(recherche: string): Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/searchPraticien';
    console.log(this.ClientUrl);
    console.log(recherche);
    return this.httpClient.post(this.ClientUrl, JSON.stringify(recherche))
  }

  postSearchSpecialite(recherche: string): Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/searchSpecialite';
    console.log(this.ClientUrl);
    console.log(recherche);
    return this.httpClient.post(this.ClientUrl, JSON.stringify(recherche))
  }

}
