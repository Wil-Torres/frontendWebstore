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
        {titulo: 'Marca', url: '/marcas/lista-marcas'},
        {titulo: 'Categoria', url: '/categorias/lista-categorias'},
        {titulo: 'Medida', url: '/medidas/lista-medidas'},
        {titulo: 'Producto', url: '/productos/lista-productos'},
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
    },
    {
      titulo: 'Configuracion',
      icono: 'mdi mdi-settings',
      submenu: [
        {titulo: 'Configurar Tienda', url: '/configuracion'},
      ]
    }
  ]

  constructor() { }
}
