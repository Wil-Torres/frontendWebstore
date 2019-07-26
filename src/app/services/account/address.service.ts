import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, } from '@angular/fire/firestore';
import { clone } from 'lodash'
import { DireccionCompra } from 'src/app/interfaces/account-settings';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  direcciones: Observable<DireccionCompra[]>;
  direccionesCollection: AngularFirestoreCollection<DireccionCompra>;
  next: AngularFirestoreCollection<DireccionCompra>;

  private _paginacion: any = {};
  public get paginacion(): any {
    return this._paginacion;
  }
  public set paginacion(v: any) {
    this._paginacion = v;
  }
  constructor(private afs: AngularFirestore) {
    this.getPaginacionDirecciones()
  }
  getPaginacionDirecciones() {
    this.afs.collection('direccionesCompra').valueChanges().subscribe(resp => {
      this._paginacion = {
        resp,
        totalRegistros: resp.length
      }
    });
  }
  getDirecciones(offset: any, limit: any) {
    this.direccionesCollection = this.afs.collection('direccionesCompra')
    return this.direccionesCollection.get().toPromise().then((snapshot) => {
      var last = snapshot.docs[offset];
      // Construct a new query starting at this document.
      // Note: this will not have the desired effect if multiple
      // direccions have the exact same population value.
      if (offset) {
        var next = this.afs.collection('direccionesCompra', ref => ref.startAfter(last).limit(limit))
      } else {
        var next = this.afs.collection('direccionesCompra', ref => ref.limit(limit));
      }
      // Use the query for pagination
      // [START_EXCLUDE]
      return next.valueChanges();
      // [END_EXCLUDE]
    });
    // [END cursor_paginate]
  }

  getDireccion(id: string) {

    this.direccionesCollection = this.afs.collection<any>('direccionesCompra');
    let x = this.direccionesCollection.snapshotChanges();
    x.forEach(producto => {
      producto.forEach(prod => {
        let data = prod.payload.doc.data();
        let id = prod.payload.doc.id;
        data['id'] = id;
        console.log("ID: ", id, " Data: ", data);
      });
    })
    return this.direccionesCollection.doc(id).valueChanges();

  }

  addDireccion(obj: DireccionCompra) {
    return this.afs.collection('direccionesCompra').add(obj);
  }
  removeDireccion(obj: DireccionCompra) {
    return this.afs.collection('direccionesCompra').doc(obj.id).delete()
  }
  updateDireccion(direccion: DireccionCompra) {

    return this.afs.collection('direccionesCompra').doc(direccion.id).update(direccion)
  }
}
