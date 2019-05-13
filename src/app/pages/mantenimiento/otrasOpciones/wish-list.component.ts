import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioCestaService } from 'src/app/services/servicio-cesta.service';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-wish-list',
  template: `
  <div class="container card">
    <div class="row">
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Nombre del Producto</th>
              <th>Cantidad</th>
              <th class="text-center">Subtotal</th>
              <th class="text-center">Descuento</th>
              <th class="text-center">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody *ngFor="let comp of compra; index as i">
            <tr>
              <td><img [src]="comp.imagenes[0]" style="width: 55px; height: 55px;"> {{comp.nombre}}</td>
              <td><input type="number" class="form-control" style="width: 90px;" [(ngModel)]="comp.cantidad"
                  (change)="alcambiarCantidad(i, comp)" [ngModelOptions]="{standalone: true}"></td>

              <td class="text-right">{{comp.subTotal | currency:'Q.'}}</td>
              <td class="text-right">{{comp.desc | currency:'Q.'}}</td>
              <td class="text-right">{{comp.total | currency:'Q.'}}</td>
              <td>
                <span class="cursor-hover" (click)="borrarCompra(i)">
                  <i class="fa fa-trash"></i>
                </span></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="4" class="text-right">TOTAL GENERAL:</th>
              <th class="text-right">{{totales | currency:'Q.'}}</th>
              <th>
                <button type="button" class="btn btn-primary" (click)="procesarCompra()">Procesar Compra</button>
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
export class WishListComponent implements OnInit {
  compra: any = [];
  totales: number = 0;
  constructor(private router: Router, private _srvCesta: ServicioCestaService,
    private localSt: LocalStorageService) {
    let obs = new Observable( observer => {
      let contador = 1;
      setInterval(() => {
        contador += 1;
        observer.next((JSON.parse(localStorage.getItem('cartShop'))).carrito);
      }, 1000)
    })
    let x = obs.subscribe( numero => {
      this.compra = (JSON.parse(localStorage.getItem('cartShop'))).carrito;
      x.unsubscribe();
    })
  }

  ngOnInit() {
    this._srvCesta.obtenerCarrito().subscribe(resp => console.log(resp))

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
  actualizarTotal() {
    this.totales = 0;
    this.compra.forEach(element => {
      this.totales += element.total;
    });
  }
  borrarCompra(item) {
    this._srvCesta.removeItemCart(item).subscribe(res => {
      this.compra = (JSON.parse(localStorage.getItem('cartShop'))).carrito;
      this.actualizarTotal();
    }).unsubscribe();
  }
}
