import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  constructor(private unRouteur:Router) {
    let httpHeaders= new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }

  ngOnInit(): void { }

  // rechercher(form: NgForm): void{ }

}
