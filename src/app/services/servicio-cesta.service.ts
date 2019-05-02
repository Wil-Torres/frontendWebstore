import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class ServicioCestaService {
  

  constructor(private localSt: LocalStorageService) { 
    
  }
  obtenerCarrito(): Observable<{}>{
    return new Observable(observer => {
      observer.next((JSON.parse(localStorage.getItem('cartShop'))).carrito)
    });
  }
  escuchaCarrito(item, accion): Observable<{}> {
    let obs = new Observable(observer => {
      let contador = 0;
      let contenedor = JSON.parse(localStorage.getItem('cartShop'));
      if (accion === 'A') { // Agregar al carrito
        if (!contenedor.carrito) {
          contenedor.carrito = [];
        } else {
          let x = contenedor.carrito.findIndex(elem => {
            return elem.id === item.id
          });
          if (typeof x !== undefined && x >= 0) {
            contenedor.carrito[x].cantidad += item.cantidad;
            contenedor.carrito[x].subTotal = contenedor.carrito[x].precio * contenedor.carrito[x].cantidad
            contenedor.carrito[x].desc = (contenedor.carrito[x].descuento * contenedor.carrito[x].subTotal) / 100
            contenedor.carrito[x].total = contenedor.carrito[x].subTotal - contenedor.carrito[x].desc;
          } else {
            item.subTotal = item.precio * item.cantidad;
            item.desc = item.descuento * item.subTotal / 100;
            item.total = item.subTotal - item.desc;
            contenedor.carrito.push(item);
          }

        }
      } else if (accion === 'B') { // Borrar del carrito
        console.log('aqui')
        contenedor.carrito.splice(item, 1)
      }
      localStorage.setItem('cartShop', JSON.stringify(contenedor));
      let intervalo = setInterval(() => {
        contador += 1;
        observer.next(contenedor)
        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }
      }, 1000)

    });
    return obs;
  }
  addItemCart(item) {
    return this.escuchaCarrito(item, 'A')
  }
  removeItemCart(item) {
    return this.escuchaCarrito(item, 'B')
  }
}
