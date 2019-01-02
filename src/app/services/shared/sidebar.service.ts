import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu : any = [
    {
      titulo: 'Mantenimiento',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Marca', url: '/lista-marcas'},
        {titulo: 'Categoria', url: ''},
        {titulo: 'Medida', url: ''},
        {titulo: 'Producto', url: ''},
        {titulo: 'Otras Opciones', url: ''}
      ]
    },
    {
      titulo: 'Movimiento',
      icono: 'mdi mdi-tag',
      submenu: [
        {titulo: 'Entradas', url: '/home'},
        {titulo: 'Salidas', url: ''},
        {titulo: 'Kardex', url: ''}
      ]
    }
  ]

  constructor() { }
}
