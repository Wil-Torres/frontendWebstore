import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioMarcaService } from 'src/app/services/servicio-marca.service';
import { FiltroBusqueda } from 'src/app/shared/componentes/busqueda-lista/busqueda-lista.component';

@Component({
  selector: 'app-marca-lista',
  template: `<div class="col-md-12 col-sm-12 col-xs-12">
    <app-encabezado-pagina optNew='marcas/nueva-marca'></app-encabezado-pagina>
    <app-busqueda-lista [filtros]="filtroBusqueda" (busqueda)="buscar()"></app-busqueda-lista>
    <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th class="gt-wd-25 text-center">Marca</th>
              <th>Descripción</th>
              <th class="gt-wd-25"></th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of objeto" (click)="edicion(item.id)">
              <td class="text-center">{{item.codigo}}</td>
              <td>{{item.descripcion}}</td>
              <!--td><button type="button" (click)="removeMarca(item)" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button></td-->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <app-paginacion (paginacion)="buscar($event.offset, $event.limit)" [totalItems]="numeroRegistros"></app-paginacion>
  </div>`,
  styleUrls: ['./marca-lista.component.css']
})
export class MarcaListaComponent implements OnInit {
  objeto: any = [];
  private _numeroRegistros = 5;
    private readonly _filtroBusqueda: FiltroBusqueda[];

  constructor(public router: Router, private _api: ServicioMarcaService) {
    this._filtroBusqueda = [
      {titulo: 'No. Documento', nombre: 'documento', tipo: 'text', codificado: true, like: true},
      {titulo: 'Descripción', nombre: 'descripcionContable', tipo: 'text', codificado: true, like: true}
    ];
   }

  ngOnInit() {
    this.buscar();
  }
  buscar(offset: any = 0, limit: any = 10) {
    this._api.getMarcas(offset, limit).then((resp) => {
      resp.subscribe(res => {
        this.objeto = res
        this._numeroRegistros = this._api.paginacion.totalRegistros
      }) 
    })
  }
  nuevo() {
    alert('hola');
  }
  edicion(id: string) {
    this.router.navigate(['/marcas/edicion-marca/', id])
  }
  removeMarca(obj) {
    this._api.removeMarca(obj).then(marca => {
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
