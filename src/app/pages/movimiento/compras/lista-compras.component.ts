import { Component, OnInit } from '@angular/core';
import { FiltroBusqueda } from 'src/app/shared/componentes/busqueda-lista/busqueda-lista.component';
import { ServicioComprasService } from 'src/app/services/servicio-compras.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-compras',
  template: `<div class="col-md-12 col-sm-12 col-xs-12">
  <div class="d-flex justify-content-end">
  <app-boton-nuevo (click)="nuevo()"></app-boton-nuevo>
</div>
<div class="gt-titulos-vista">
<h2 class="titulo">{{titulos.tituloLista}}</h2>
<p class="titulo d-sm-none d-none"> {{titulos.subtituloLista}}</p>
</div>
<app-busqueda-lista [filtros]="filtroBusqueda" (busqueda)="buscar()"></app-busqueda-lista>
<div class="col-md-12 col-sm-12 col-xs-12">
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th class="gt-wd-25 text-center">Documento</th>
          <th>Nombre de Proveedor</th>
          <th>Fecha de Commpa</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of objeto" (click)="edicion(item.id)">
          <td class="text-center">{{item.id}}</td>
          <td>{{item.descripcion}}</td>
          <td>{{item.fecha}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<app-paginacion (paginacion)="buscar($event.offset, $event.limit)" [totalItems]="numeroRegistros"></app-paginacion>
</div>`,
  styles: []
})
export class ListaComprasComponent implements OnInit {
  objeto: any = [];
  titulos: any = {};
  private _numeroRegistros = 5;
  private readonly _filtroBusqueda: FiltroBusqueda[];

  constructor(public router: Router, private _api: ServicioComprasService) {
    this.titulos.tituloLista = 'Mantenimiento de Compras';
    this.titulos.subtituloLista = 'Lista';
    this._filtroBusqueda = [
      { titulo: 'Código', nombre: 'codigo', tipo: 'text', codificado: true, like: true },
      { titulo: 'Descripción', nombre: 'descripcion', tipo: 'text', codificado: true, like: true }
    ];
  }

  ngOnInit() {
    this.buscar();
  }
  buscar(offset: any = 0, limit: any = 10) {
    this._api.getCompras(offset, limit).then((resp) => {
      resp.subscribe(res => {
        this.objeto = res
        this._numeroRegistros = this._api.paginacion.totalRegistros
      })
    })
  }
  nuevo() {
    this.router.navigate(['/compras/nueva-compra/']);
  }
  edicion(id: string) {
    this.router.navigate(['/compras/edicion-compra/', id])
  }
  removeCompra(obj) {
    this._api.removeCompra(obj).then(compra => {
    }, err => {
      console.error(err);
    })
  }
  get numeroRegistros(): number {
    return this._numeroRegistros;
  }
  get filtroBusqueda() {
    return this._filtroBusqueda;
  }

}
