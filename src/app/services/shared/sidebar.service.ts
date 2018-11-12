import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu : any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Home', url: '/home'},
        {titulo: 'About', url: ''},
        {titulo: 'Contact', url: ''}
      ]
    }
  ]

  constructor() { }
}
