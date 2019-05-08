import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Producto } from '../interfaces/producto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductoService {
  productoCollection: AngularFirestoreCollection<Producto>;
  private _paginacion: any = {};
  public get paginacion(): any {
    return this._paginacion;
  }
  public set paginacion(v: any) {
    this._paginacion = v;
  }

  constructor(private afs: AngularFirestore) { }
  getPaginacionProductos() {
    this.afs.collection('productos').valueChanges().subscribe(resp => {
      this._paginacion = {
        resp,
        totalRegistros: resp.length
      }
    });
  }
  getProductos(offset: any, limit: any) { 
    this.productoCollection = this.afs.collection('productos')
    return this.productoCollection.get().toPromise().then((snapshot) => {
      var last = snapshot.docs[offset];
      // Construct a new query starting at this document.
      // Note: this will not have the desired effect if multiple
      // productos marcas have the exact same population value.
      if (offset) {
        var next = this.afs.collection('productos', ref => ref.startAfter(last).limit(limit))
      } else {
        var next = this.afs.collection('productos', ref => ref.limit(limit));
      }
      // Use the query for pagination
      // [START_EXCLUDE]
      return next.valueChanges();
      // [END_EXCLUDE]
    });
    // [END cursor_paginate]
  }
  getProducto(id: string) { 
    this.productoCollection = this.afs.collection<any>('productos');
    let x = this.productoCollection.snapshotChanges();
    x.forEach(producto => {
      producto.forEach(prod => {
        let data = prod.payload.doc.data();
        let id = prod.payload.doc.id;
        data['id'] = id;
        console.log("ID: ", id, " Data: ", data);
      });
    })
    return this.productoCollection.doc(id).valueChanges();
  }
  addProductos(obj: Producto) {
    return this.afs.collection('productos').add(obj);
   }
  removeProducto(obj: Producto) { 
    return this.afs.collection('productos').doc(obj.id).delete()
  }
  updateProducto(producto: Producto) { 
    return this.afs.collection('productos').doc(producto.id).update(producto)
  }
  obtenerProducto (orden, param, value) {
    this.productoCollection = this.afs.collection('productos', ref => {
      let query: firebase.firestore.Query = ref
      switch (param) {
        case 1:
          query = query.where('categorias', 'array-contains', value);
          break;
        case 2:
          query = query.where('marca', '>=', value);
          break;
      }
      switch (orden) {
        case 1:
          query = query.orderBy("precio", "asc");
          break;
        case 2:
          query = query.orderBy('precio', 'desc');
          break;
        case 3:
          query = query.orderBy('rating');
          break;
        case 4:
          query = query.orderBy('nombre', 'asc');
          break;
        case 4:
          query = query.orderBy('nombre', 'desc');
          break;
      }
      return query;
    });
    return this.productoCollection.valueChanges().pipe(
      map((x) => {
        x.forEach(elem => {
          elem['cantidad'] = 1
        })
        return  x;
      })
    );
    
  }
  obtenerProductoCodigo (value:any) {
    this.productoCollection = this.afs.collection('productos', ref => {
      let query: firebase.firestore.Query = ref
      query = query.where('codigoProducto', '==', value);
      return query;
    });
    return this.productoCollection.valueChanges()
  }
}
