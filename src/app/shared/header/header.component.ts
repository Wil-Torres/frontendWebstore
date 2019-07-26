import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/login';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { AuthService } from 'src/app/services/autentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  usuarioTemp: User;

  constructor(private auth: AuthService,  private router: Router) {
    this.auth.user.subscribe(resp => { 
      this.usuarioTemp = resp;
    })
  }

  ngOnInit() {

  }

  cerrarSesion() {
    this.auth.signOut().then(resp => {
      this.router.navigate(['/login']);
    }).catch(err => {
      console.log(err);
    });
  }
}
