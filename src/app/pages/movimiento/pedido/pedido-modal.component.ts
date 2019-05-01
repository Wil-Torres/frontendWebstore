import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Pedido } from 'src/app/interfaces/pedido';

@Component({
  selector: 'app-pedido-modal',
  template:`
  <div class="modal-content">
    <div class="modal-header bg-primary text-white d-flex justify-content-left">
      <app-boton claseColor="btn-light" claseIcono="fa-times" titulo="Cerrar" (clic)="cancelar()"></app-boton>
    </div>
    <div class="modal-body">
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr class="bg-primary text-white">
              <th class="gt-w-75 text-center">Código</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
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
