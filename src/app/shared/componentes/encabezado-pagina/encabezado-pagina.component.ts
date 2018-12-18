import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado-pagina',
  templateUrl: './encabezado-pagina.component.html',
  styleUrls: ['./encabezado-pagina.component.css']
})
export class EncabezadoPaginaComponent implements OnInit {

  titulos: any = {};

  constructor() { }

  ngOnInit() {
    this.titulos.tituloLista = 'Listado de Marcas';
    this.titulos.subtituloLista = 'Lista todas las marcas asociadas a un producto determinado';
  }

}
