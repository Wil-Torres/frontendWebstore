import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  template: `
  <div class="card col-xl-12 col-lg-12">
    <h4>Revise su orden</h4>
    <hr class="padding-bottom-1x">
    <div class="table-responsive shopping-cart">
      <table class="table">
        <thead>
          <tr>
            <th>Nombre del Producto</th>
            <th class="text-center">Total parcial</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let comp of compra">
            <td>
              <div class="product-item">
                <a class="product-thumb">
                  <img [src]="comp.imagenes[0]" alt="Product" style="width: 100px; height: 55px;">
                </a>
                <div class="product-info">
                  <h4 class="product-title">
                    <a>{{comp.nombre}}</a>
                  </h4>
                </div>
              </div>
            </td>
            <td class="text-center text-lg text-medium">{{comp.precio | currency:'Q.'}}</td>
            <td class="text-center"><a class="btn btn-outline-primary btn-sm" (click)="editarCarrito()">Editar</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="shopping-cart-footer">
      <div class="column"></div>
      <div class="column text-lg">Subtotal: <span class="text-medium">Q289.68</span></div>
    </div>
    <div class="row padding-top-1x mt-3">
      <div class="col-sm-6">
        <h5>Embarcar hacia:</h5>
        <ul class="list-unstyled">
          <li><span class="text-muted">Cliente:</span>Daniel Adams</li>
          <li><span class="text-muted">Dirección:</span>44 Shirley Ave. West Chicago, IL 60185, USA</li>
          <li><span class="text-muted">Teléfono:</span>+1(808) 764 554 330</li>
        </ul>
      </div>
      <div class="col-sm-6">
        <h5>Método de pago:</h5>
        <ul class="list-unstyled">
          <li><span class="text-muted">Tarjeta de Credito:</span>**** **** **** 5300</li>
        </ul>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class ReviewComponent implements OnInit {
  @Input('obj1') public compra:any=[]
  constructor(private router: Router) {
   }

  ngOnInit() {
  }
  editarCarrito() {
    this.router.navigate(['/carrito']);
  } 

}
