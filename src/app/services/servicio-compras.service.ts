import { Injectable } from '@angular/core';
import { ServicioProductoService } from './servicio-producto.service';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicioComprasService {
  compras: Observable<any[]>;
  comprasCollection: AngularFirestoreCollection<any>;
  existenciaCollection: AngularFirestoreCollection<any>;
  next: AngularFirestoreCollection<any>;

  private _paginacion: any = {};
  public get paginacion(): any {
    return this._paginacion;
  }
  public set paginacion(v: any) {
    this._paginacion = v;
  }
  constructor(private afs: AngularFirestore, private srvProducto: ServicioProductoService) {
    this.getPaginacionCompras()
  }
  getPaginacionCompras() {
    this.afs.collection('entradas').valueChanges().subscribe(resp => {
      this._paginacion = {
        resp,
        totalRegistros: resp.length
      }
    });
  }
  getCompras(offset: any, limit: any) {
    this.comprasCollection = this.afs.collection('entradas')
    return this.comprasCollection.get().toPromise().then((snapshot) => {
      var last = snapshot.docs[offset];
      // Construct a new query starting at this document.
      // Note: this will not have the desired effect if multiple
      // Entradas have the exact same population value.
      if (offset) {
        var next = this.afs.collection('entradas', ref => ref.startAfter(last).limit(limit))
      } else {
        var next = this.afs.collection('entradas', ref => ref.limit(limit));
      }
      // Use the query for pagination
      // [START_EXCLUDE]
      return next.valueChanges();
      // [END_EXCLUDE]
    });
    // [END cursor_paginate]
  }

  getCompra(id: string) {

    this.comprasCollection = this.afs.collection<any>('entradas');
    let x = this.comprasCollection.snapshotChanges();
    x.forEach(producto => {
      producto.forEach(prod => {
        let data = prod.payload.doc.data();
        let id = prod.payload.doc.id;
        data['id'] = id;
        console.log("ID: ", id, " Data: ", data);
      });
    })
    return this.comprasCollection.doc(id).valueChanges();

  }

  addCompras(obj: any) {
    return this.afs.collection('entradas').add(obj);
  }
  removeCompra(obj: any) {
    return this.afs.collection('entradas').doc(obj.id).delete()
  }
  updateCompra(compra: any) {

    return this.afs.collection('entradas').doc(compra.id).update(compra)
  }
  buscarExistencia (productoId: any) {
    this.existenciaCollection = this.afs.collection('existencias', ref => {
      let query: firebase.firestore.Query = ref
      query = query.where('productoId', '==', productoId);
      return query;
    });
    return this.existenciaCollection.valueChanges()
  }
  actualizarExistencia(obj:any ) {
    return this.afs.collection('existencias').doc(obj.id).update(obj);

  }
}
