import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Pedido } from '../interfaces/pedido';

@Injectable({
  providedIn: 'root'
})
export class ServicioPedidosService {
  pedidoCollection: AngularFirestoreCollection<Pedido>;
  private _paginacion: any = {};
  public get paginacion(): any {
    return this._paginacion;
  }
  public set paginacion(v: any) {
    this._paginacion = v;
  }

  constructor(private afs: AngularFirestore) { 
    this.getPaginacionPedidos();
  }
  getPaginacionPedidos() {
    this.afs.collection('pedidos').valueChanges().subscribe(resp => {
      this._paginacion = {
        resp,
        totalRegistros: resp.length
      }
    });
  }
  getPedidos(offset: any, limit: any) { 
    this.pedidoCollection = this.afs.collection('pedidos')
    return this.pedidoCollection.get().toPromise().then((snapshot) => {
      var last = snapshot.docs[offset];
      // Construct a new query starting at this document.
      // Note: this will not have the desired effect if multiple
      // pedidos marcas have the exact same population value.
      if (offset) {
        var next = this.afs.collection('pedidos', ref => ref.startAfter(last).limit(limit))
      } else {
        var next = this.afs.collection('pedidos', ref => ref.limit(limit));
      }
      // Use the query for pagination
      // [START_EXCLUDE]
      return next.valueChanges();
      // [END_EXCLUDE]
    });
    // [END cursor_paginate]
  }
  getPedido(id: string) { 
    this.pedidoCollection = this.afs.collection<any>('pedidos');
    let x = this.pedidoCollection.snapshotChanges();
    x.forEach(pedido => {
      pedido.forEach(prod => {
        let data = prod.payload.doc.data();
        let id = prod.payload.doc.id;
        data['id'] = id;
        console.log("ID: ", id, " Data: ", data);
      });
    })
    return this.pedidoCollection.doc(id).valueChanges();
  }
  addpedidos(obj: Pedido) {
    return this.afs.collection('pedidos').add(obj);
   }
  removePedido(obj: Pedido) { 
    return this.afs.collection('pedidos').doc(obj.id).delete()
  }
  updatePedido(pedido: Pedido) { 
    return this.afs.collection('pedidos').doc(pedido.id).update(pedido)
  }

}
