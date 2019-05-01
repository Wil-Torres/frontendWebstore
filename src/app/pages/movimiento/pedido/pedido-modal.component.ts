import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Pedido } from 'src/app/interfaces/pedido';

@Component({
  selector: 'app-pedido-modal',
  template:`
  <div class="modal-content">
    <div class="modal-header bg-primary text-white d-flex justify-content-left">
      <h4 class="modal-title flex-grow-1 text-center">Número de pedido - {{pedido.pedidoNumero}}</h4>
      <app-boton claseColor="btn-light floar-right" claseIcono="fa-times" titulo="Cerrar" (clic)="cancelar()"></app-boton>
    </div>
    <div class="modal-body">
      <div class="table-responsive">
        <table class="table table-hover table-sm">
          <thead>
            <tr class="bg-primary text-white">
              <th colspan="2">Nombre del producto</th>
              <th class="gt-w-75 text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of pedido.detalle">
            <td style="padding-right: 0;"><img [src]="item.imagenes[0]" style="width: 100px;"></td>
              <td style="padding-left: 0;">
                <div class="row">
                  <div class="col"><b>Producto:</b>: {{item.nombre}} <span class="badge badge-secondary">{{item.cantidad}}</span></div>
                </div>
                <div class="row">
                  <div class="col"><b>Tamaño:</b> {{item.talla}}</div>
                </div>
                <div class="row">
                  <div class="col"><b>Color:</b> {{item.color}}</div>
                </div>
              </td>
              <td class="gt-w-75 text-right">{{item.total | number: '0.2'}}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th class="text-right" colspan="2">Total</th>
              <th class="text-right">{{pedido.monto | number: '0.2'}}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
	`,
  styles: []
})
export class PedidoModalComponent implements OnInit {
  private _pedido : Pedido;
  public get pedido() : Pedido {
    return this._pedido;
  }
  public set pedido(v : Pedido) {
    this._pedido = v;
  }
  
  constructor(private modalRef: BsModalRef) { }

  ngOnInit() {
    console.log(this.pedido);
  }
  cancelar() {
    this.modalRef.hide();
  }
}
