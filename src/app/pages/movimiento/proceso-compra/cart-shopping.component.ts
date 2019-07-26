import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioCestaService } from 'src/app/services/servicio-cesta.service';

@Component({
  selector: 'app-cart-shopping',
  template: `
  <div style="width: 400px;">
    <ul class="list-group mt-4">
      <li class="list-group-item list-group-item-action d-flex justify-content-between aling-items-center"
        *ngFor="let comp of compra; index as i">
        <span>
          <img [src]="comp.imagenes[0]" style="height: 35px; width: 55px;">{{comp.id}} - {{comp.nombre}} / {{comp.precio |
          currency:'Q.' }}
        </span>
        <span class="cursor-hover" (click)="borrarCompra(i)">
          <i class="fas fa-trash"></i>
        </span>
      </li>
    </ul>
    <div class="text-center">
      <button type="button" class="btn btn-warning" (click)="procesarCompra()">Procesar Compra</button>
    </div>
  </div>
  <div class="container card d-xs-none d-sm-none">
    <div class="row">
      <div class="table-responsive">
        <table class="table table-striped">
          <thead class="bg-primary text-light">
            <tr>
              <th>Nombre del Producto</th>
              <th>Cantidad</th>
              <th class="text-center">Subtotal</th>
              <th class="text-center">Descuento</th>
              <th class="text-center">Total</th>
              <th><a class="btn btn btn-outline-danger btn-sm">Borrar</a></th>
            </tr>
          </thead>
          <tbody *ngFor="let comp of compra; index as i">
            <tr>
              <td><img [src]="comp.imagenes[0]" style="width: 55px; height: 55px;"> {{comp.nombre}}</td>
              <td><input type="number" class="form-control form-control-sm" style="width: 90px;" [(ngModel)]="comp.cantidad"
                  (change)="alcambiarCantidad(i, comp)" [ngModelOptions]="{standalone: true}"></td>

              <td class="text-right">{{comp.subTotal | currency:'Q.'}}</td>
              <td class="text-right">{{comp.desc | currency:'Q.'}}</td>
              <td class="text-right">{{comp.total | currency:'Q.'}}</td>
              <td>
                <span class="cursor-hover" (click)="borrarCompra(i)">
                  <i class="fas fa-trash"></i>
                </span></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="4" class="text-right">TOTAL GENERAL:</th>
              <th class="text-right">{{totales | currency:'Q.'}}</th>
              <th>
                <button type="button" class="btn btn-warning" (click)="procesarCompra()">Procesar Compra</button>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class CartShoppingComponent implements OnInit {
  compra: any = [];
  totales: number = 0;

  constructor(private router: Router,private servicioMaestro: ServicioCestaService) {
    this.compra = (JSON.parse(localStorage.getItem('cartShop'))).carrito;
    if (this.compra) {
      this.actualizarTotal();
    }

  }

  ngOnInit() {
  }
  procesarCompra() {
    this.router.navigate(['/procesar']);
  }
  alcambiarCantidad(indice, item) {
    if (!item.cantidad || item.cantidad < 0) {
      console.warn('debe definir una cantidad ')
      return
    }
    this.compra[indice].subTotal = this.compra[indice].precio * this.compra[indice].cantidad;
    this.compra[indice].desc = this.compra[indice].descuento * this.compra[indice].subTotal / 100;
    this.compra[indice].total = this.compra[indice].subTotal - this.compra[indice].desc;
    this.actualizarTotal();
    window.localStorage.setItem('cartShop', JSON.stringify({ carrito: this.compra }));
  }
  actualizarTotal () {
    this.totales = 0;
    this.compra.forEach(element => {
      this.totales += element.total;
    });
  }
  borrarCompra(item){
    this.servicioMaestro.removeItemCart(item).subscribe(res => {
      this.compra = (JSON.parse(localStorage.getItem('cartShop'))).carrito;
      this.actualizarTotal();
    })
  }

}
