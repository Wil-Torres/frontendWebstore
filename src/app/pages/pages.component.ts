import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/autentication/auth.service';
import { isNil } from 'lodash';
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {
  private loggin: boolean = false;

  constructor(private srvAuth: AuthService) {
    this.srvAuth.user.subscribe(auth => {
      console.log(auth)
      this.loggin = true;
    }).unsubscribe();
  }

  ngOnInit() {
    init_plugins();
    if (!this.loggin) {
      let barraIzquierda: any = document.getElementById('idSidebar');
      barraIzquierda.classList.add('noVisible');
      let reajueste: any = document.getElementById('idWrapper');
      reajueste.classList.remove('page-wrapper');
    }

  }

  ngOnDestroy() {
    let panelDerecho: any = document.getElementById('idSidebar');
    if (!isNil(panelDerecho)){
    panelDerecho.classList.remove('noVisible');}
    let panelCentral: any = document.getElementById('idWrapper');
    if(!isNil(panelCentral)){
    panelCentral.classList.add('page-wrapper');}
  }

}
