import { Component, OnInit } from '@angular/core';
import { FiltroBusqueda } from 'src/app/shared/componentes/busqueda-lista/busqueda-lista.component';
import { Router } from '@angular/router';
import { ServicioPedidosService } from 'src/app/services/servicio-pedidos.service';
import { Pedido } from 'src/app/interfaces/pedido';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PedidoModalComponent } from './pedido-modal.component';
import { PdfMakeWrapper } from 'pdfmake-wrapper';


@Component({
  selector: 'app-pedido-lista',
  template: `
  <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead class="bg-primary text-light">
            <tr>
              <th class="gt-wd-100 text-center">Orden #</th>
              <th class="gt-wd-100 text-center">Fecha de Compra</th>
              <th class="gt-wd-150 text-center">Estado</th>
              <th class="gt-wd-75 text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of objeto" (click)="edicion(item)">
              <td class="">{{item.pedidoNumero}}</td>
              <td class="text-center">{{item.fecha.toDate() | date:'shortDate'}}</td>
              <td class="text-center"><span class="badge" [ngClass]="{'badge-success': item.estado === 5, 'badge-warning': item.estado === 2, 'badge-danger': item.estado === 3, 'badge-info': item.estado === 4, 'badge-dark': item.estado === 1}">{{item.estadoDes}}</span></td>
              <td class="text-right">{{item.monto | number : '0.2'}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    <app-paginacion (paginacion)="buscar($event.offset, $event.limit)" [totalItems]="numeroRegistros"></app-paginacion>
    </div>`,
  styles: []
})
export class PedidoListaComponent implements OnInit {
  objeto: any = [];
  titulos: any = {};
  private modalRef: BsModalRef;
  private _numeroRegistros = 5;
  private readonly _filtroBusqueda: FiltroBusqueda[];

  constructor(public router: Router, private _api: ServicioPedidosService, private modalService: BsModalService) {
    this.titulos.tituloLista = 'Mantenimiento de Categorias';
    this.titulos.subtituloLista = 'Lista';
    this._filtroBusqueda = [
      { titulo: 'Código', nombre: 'codigo', tipo: 'text', codificado: true, like: true },
      { titulo: 'Descripción', nombre: 'descripcion', tipo: 'text', codificado: true, like: true }
    ];
  }

  ngOnInit() {
    this.buscar();
  }
  buscar(offset: any = 0, limit: any = 5) {
    this._api.getPedidos(offset, limit).then((resp) => {
      resp.subscribe(res => {
        res.forEach((elem: Pedido) => {
          switch (elem.estado) {
            case 1:
              elem.estadoDes = 'Orden Confirmada'

              break;
            case 2:
              elem.estadoDes = 'Procesamiento'
              break;
            case 3:
              elem.estadoDes = 'Control Calidad'
              break;
            case 4:
              elem.estadoDes = 'Enviado'
              break;
            case 5:
              elem.estadoDes = 'Entregado'
              break;

            default:
              break;
          }
        })
        this.objeto = res
        this._numeroRegistros = this._api.paginacion.totalRegistros
        this.generarArchivoPdf();
      })
    })
  }
  nuevo() {
    this.router.navigate(['/categorias/nueva-categoria/']);
  }
  edicion(pedido: Pedido) {
    const opciones = {
      initialState: {
        pedido: pedido
      },
      class: 'modal-lg'
    };

    this.modalRef = this.modalService.show(PedidoModalComponent, opciones);
    this.modalRef.content.pedido = pedido;
  }
  get numeroRegistros(): number {
    return this._numeroRegistros;
  }
  get filtroBusqueda() {
    return this._filtroBusqueda;
  }

  generarArchivoPdf() {
    let cuerpo = [
      [{ text: 'Orden #', style: 'tableHeader' },
      { text: 'Fecha de Compra', style: 'tableHeader' },
      { text: 'Estado', style: 'tableHeader' },
      { text: 'Total', style: 'tableHeader' }
      ]
    ];
    this.objeto.forEach(element => {
      cuerpo.push([element.pedidoNumero, element.fecha.toDate().fechaEstandar('/'), element.estadoDes, element.monto.round(2)])
    });

    console.log(cuerpo);

    const pdf: PdfMakeWrapper = new PdfMakeWrapper();

    pdf.add(
      { text: 'Tables', style: 'header' });
    pdf.add({
      style: 'tableExample',
      table: {
        headerRows: 1,
        widths: [150, 75, 100, 100],
        body: cuerpo
      },
      layout: 'headerLineOnly'
    })
    pdf.styles({
      header: {
        fontSize: 8,
        bold: true,
        'margin-left' : 0,
        'margin-right': 0,
        'margin-top': 0,
        'margin-bottom': 10
      },
      subheader: {
        fontSize: 8,
        bold: true,
        'margin-left' : 0,
        'margin-right': 10,
        'margin-top': 0,
        'margin-bottom': 5
      },
      tableExample: {
        'margin-left' : 0,
        'margin-right': 5,
        'margin-top': 0,
        'margin-bottom': 15
      },
      tableHeader: {
        bold: true,
        fontSize: 8,
        color: 'white',
        fillColor: '#337ab7',
      }
    })
    pdf.create().open();
  }

}
