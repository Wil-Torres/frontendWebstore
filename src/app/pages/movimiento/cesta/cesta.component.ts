import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioCestaService } from 'src/app/services/servicio-cesta.service';
import { Observable } from 'rxjs';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styles: []
})
export class CestaComponent implements OnInit {
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
  irWishList() {
    this.router.navigate(['/wishlist']);
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
    let borrado = this._srvCesta.removeItemCart(item).subscribe(res => {
      this.compra = (JSON.parse(localStorage.getItem('cartShop'))).carrito;
      this.actualizarTotal();
      borrado.unsubscribe();
    })
  }
}
