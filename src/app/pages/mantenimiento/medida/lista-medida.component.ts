import { Component, OnInit } from '@angular/core';
import { FiltroBusqueda } from 'src/app/shared/componentes/busqueda-lista/busqueda-lista.component';
import { Router } from '@angular/router';
import { ServicioMedidaService } from 'src/app/services/servicio-medida.service';

@Component({
  selector: 'app-lista-medida',
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
              <th class="gt-wd-25 text-center">Código</th>
              <th>Descripción</th>
              <th class="gt-wd-25"></th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of objeto" (click)="edicion(item.id)">
              <td class="text-center">{{item.codigo}}</td>
              <td>{{item.descripcion}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <app-paginacion (paginacion)="buscar($event.offset, $event.limit)" [totalItems]="numeroRegistros"></app-paginacion>
  </div>`,
  styles: []
})
export class ListaMedidaComponent implements OnInit {
  objeto: any = [];
  titulos: any = {};
  private _numeroRegistros = 5;
    private readonly _filtroBusqueda: FiltroBusqueda[];

  constructor(public router: Router, private _api: ServicioMedidaService) {
    this.titulos.tituloLista = 'Mantenimiento de medidas';
    this.titulos.subtituloLista = 'Lista';
    this._filtroBusqueda = [
      {titulo: 'Código', nombre: 'codigo', tipo: 'text', codificado: true, like: true},
      {titulo: 'Descripción', nombre: 'descripcion', tipo: 'text', codificado: true, like: true}
    ];
   }

  ngOnInit() {
    this.buscar();
  }
  buscar(offset: any = 0, limit: any = 10) {
    this._api.getMedidas(offset, limit).then((resp) => {
      resp.subscribe(res => {
        this.objeto = res
        this._numeroRegistros = this._api.paginacion.totalRegistros
      }) 
    })
  }
  nuevo() {
    this.router.navigate(['/medidas/nueva-medida/']);
  }
  edicion(id: string) {
    this.router.navigate(['/medidas/edicion-medida/', id])
  }
  get numeroRegistros(): number {
    return this._numeroRegistros;
  }
  get filtroBusqueda() {
    return this._filtroBusqueda;
  }
}
