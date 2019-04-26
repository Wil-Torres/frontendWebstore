import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class ServicioCategoriaService {
  categoriasCollection: AngularFirestoreCollection<Categoria>;
  private _paginacion: any = {};
  public get paginacion(): any {
    return this._paginacion;
  }
  public set paginacion(v: any) {
    this._paginacion = v;
  }

  constructor(private afs: AngularFirestore) { }
  getPaginacionCategorias(){
    this.afs.collection('categorias').valueChanges().subscribe(resp => {
      this._paginacion = {
        resp,
        totalRegistros: resp.length
      }
    });
  }
  getCategorias(offset: any, limit: any) {
    this.categoriasCollection = this.afs.collection('categorias')
    return this.categoriasCollection.get().toPromise().then((snapshot) => {
      var last = snapshot.docs[offset];
      // Construct a new query starting at this document.
      // Note: this will not have the desired effect if multiple
      // categorias have the exact same population value.
      if (offset) {
        var next = this.afs.collection('categorias', ref => ref.startAfter(last).limit(limit))
      } else {
        var next = this.afs.collection('categorias', ref => ref.limit(limit));
      }
      // Use the query for pagination
      // [START_EXCLUDE]
      return next.valueChanges();
      // [END_EXCLUDE]
    });
    // [END cursor_paginate]
  }
  getCategoria (id:string) {
    this.categoriasCollection = this.afs.collection<any>('categorias');
       let x = this.categoriasCollection.snapshotChanges();
       x.forEach(producto => {
         producto.forEach( prod =>{
             let data = prod.payload.doc.data();
             let id = prod.payload.doc.id;
             data['id'] = id;
             });
       })
       return this.categoriasCollection.doc(id).valueChanges();
  }
  addCategorias(obj: Categoria) {
    return this.afs.collection('categorias').add(obj);
  }
  removeCategoria(obj: Categoria) {
    return this.afs.collection('categorias').doc(obj.id).delete()
  }
  updateCategoria (categoria: Categoria){
    return this.afs.collection('categorias').doc(categoria.id).update(categoria)
  }
}
