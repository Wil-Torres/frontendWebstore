import { Injectable } from '@angular/core';
import { TarjetaCompra } from 'src/app/interfaces/account-settings';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, } from '@angular/fire/firestore';
import { clone } from 'lodash'

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  tarjetas: Observable<TarjetaCompra[]>;
  tarjetasCollection: AngularFirestoreCollection<TarjetaCompra>;
  next: AngularFirestoreCollection<TarjetaCompra>;

  private _paginacion: any = {};
  public get paginacion(): any {
    return this._paginacion;
  }
  public set paginacion(v: any) {
    this._paginacion = v;
  }
  constructor(private afs: AngularFirestore) {
    this.getPaginaciontarjetas()
  }
  getPaginaciontarjetas() {
    this.afs.collection('tarjetasCompra').valueChanges().subscribe(resp => {
      this._paginacion = {
        resp,
        totalRegistros: resp.length
      }
    });
  }
  getTarjetas(offset: any, limit: any) {
    this.tarjetasCollection = this.afs.collection('tarjetasCompra')
    return this.tarjetasCollection.get().toPromise().then((snapshot) => {
      var last = snapshot.docs[offset];
      // Construct a new query starting at this document.
      // Note: this will not have the desired effect if multiple
      // direccions have the exact same population value.
      if (offset) {
        var next = this.afs.collection('tarjetasCompra', ref => ref.startAfter(last).limit(limit))
      } else {
        var next = this.afs.collection('tarjetasCompra', ref => ref.limit(limit));
      }
      // Use the query for pagination
      // [START_EXCLUDE]
      return next.valueChanges();
      // [END_EXCLUDE]
    });
    // [END cursor_paginate]
  }

  getTarjeta(id: string) {

    this.tarjetasCollection = this.afs.collection<any>('tarjetasCompra');
    let x = this.tarjetasCollection.snapshotChanges();
    x.forEach(producto => {
      producto.forEach(prod => {
        let data = prod.payload.doc.data();
        let id = prod.payload.doc.id;
        data['id'] = id;
        console.log("ID: ", id, " Data: ", data);
      });
    })
    return this.tarjetasCollection.doc(id).valueChanges();

  }

  addTarjeta(obj: TarjetaCompra) {
    return this.afs.collection('tarjetasCompra').add(obj);
  }
  removeTarjeta(obj: TarjetaCompra) {
    return this.afs.collection('tarjetasCompra').doc(obj.id).delete()
  }
  updateTarjeta(direccion: TarjetaCompra) {

    return this.afs.collection('tarjetasCompra').doc(direccion.id).update(direccion)
  }
}
