import { Injectable } from '@angular/core';
import { Medida } from '../interfaces/medida';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicioMedidaService {
  medidaCollection: AngularFirestoreCollection<Medida>;
  private _paginacion: any = {};
  public get paginacion(): any {
    return this._paginacion;
  }
  public set paginacion(v: any) {
    this._paginacion = v;
  }

  constructor(private afs: AngularFirestore) { }
  getPaginacionMedidas(){
    this.afs.collection('medidas').valueChanges().subscribe(resp => {
      this._paginacion = {
        resp,
        totalRegistros: resp.length
      }
    });
  }
  getMedidas(offset: any, limit: any) {
    this.medidaCollection = this.afs.collection('medidas')
    return this.medidaCollection.get().toPromise().then((snapshot) => {
      var last = snapshot.docs[offset];
      // Construct a new query starting at this document.
      // Note: this will not have the desired effect if multiple
      // categorias have the exact same population value.
      if (offset) {
        var next = this.afs.collection('medidas', ref => ref.startAfter(last).limit(limit))
      } else {
        var next = this.afs.collection('medidas', ref => ref.limit(limit));
      }
      // Use the query for pagination
      // [START_EXCLUDE]
      return next.valueChanges();
      // [END_EXCLUDE]
    });
    // [END cursor_paginate]
  }
  getMedida (id:string) {
    this.medidaCollection = this.afs.collection<any>('medidas');
       let x = this.medidaCollection.snapshotChanges();
       x.forEach(producto => {
         producto.forEach( prod =>{
             let data = prod.payload.doc.data();
             let id = prod.payload.doc.id;
             data['id'] = id;
             });
       })
       return this.medidaCollection.doc(id).valueChanges();
  }
  addMedidas(obj: Medida) {
    return this.afs.collection('medidas').add(obj);
  }
  removeMedida(obj: Medida) {
    return this.afs.collection('medidas').doc(obj.id).delete()
  }
  updateMedida (medida: Medida){
    return this.afs.collection('medidas').doc(medida.id).update(medida)
  }
}
