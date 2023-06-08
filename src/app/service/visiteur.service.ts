import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Visiteur} from "../metier/Visiteur";

@Injectable({
  providedIn: 'root'
})
export class VisiteurService {

  private header = new Headers({'content-type': 'application/json'});
  private ClientUrl: string="";

  constructor(private httpClient: HttpClient) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }
  getLogin (unV: Visiteur): Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/login';
    return this.httpClient.post(this.ClientUrl, JSON.stringify(unV));
  }
}
