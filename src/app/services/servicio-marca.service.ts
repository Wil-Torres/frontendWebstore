import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../interfaces/marca';
import { AngularFirestoreCollection, AngularFirestore, } from '@angular/fire/firestore';
import { clone } from 'lodash'


@Injectable({
  providedIn: 'root'
})
export class ServicioMarcaService {
  marcas: Observable<Marca[]>;
  marcasCollection: AngularFirestoreCollection<Marca>;
  next: AngularFirestoreCollection<Marca>;

  private _paginacion: any = {};
  public get paginacion(): any {
    return this._paginacion;
  }
  public set paginacion(v: any) {
    this._paginacion = v;
  }
  constructor(private afs: AngularFirestore) {
    this.getPaginacionMarcas()
  }
  getPaginacionMarcas() {
    this.afs.collection('marcas').valueChanges().subscribe(resp => {
      this._paginacion = {
        resp,
        totalRegistros: resp.length
      }
    });
  }
  getMarcas(offset: any, limit: any) {
    this.marcasCollection = this.afs.collection('marcas')
    return this.marcasCollection.get().toPromise().then((snapshot) => {
      var last = snapshot.docs[offset];
      // Construct a new query starting at this document.
      // Note: this will not have the desired effect if multiple
      // marcas have the exact same population value.
      if (offset) {
        var next = this.afs.collection('marcas', ref => ref.startAfter(last).limit(limit))
      } else {
        var next = this.afs.collection('marcas', ref => ref.limit(limit));
      }
      // Use the query for pagination
      // [START_EXCLUDE]
      return next.valueChanges();
      // [END_EXCLUDE]
    });
    // [END cursor_paginate]
  }

  getMarca (id:string) {
   
       this.marcasCollection = this.afs.collection<any>('marcas');
       let x = this.marcasCollection.snapshotChanges();
       x.forEach(producto => {
         producto.forEach( prod =>{
             let data = prod.payload.doc.data();
             let id = prod.payload.doc.id;
             data['id'] = id;
             console.log( "ID: ", id, " Data: " , data );
             });
       })
       return this.marcasCollection.doc(id).valueChanges();

  }

  addMarcas(obj: Marca) {
    return this.afs.collection('marcas').add(obj);
  }
  removeMarca(obj: Marca) {
    return this.afs.collection('marcas').doc(obj.id).delete()
  }
  updateMarca (marca: Marca){
    console.log(marca)
    return this.afs.collection('marcas').doc(marca.id).update(marca)
  }
}
