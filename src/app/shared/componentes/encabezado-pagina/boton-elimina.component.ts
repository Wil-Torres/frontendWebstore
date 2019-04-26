import { Component, OnInit } from '@angular/core';
import { BotonDefaultComponent } from './boton-default.component';

@Component({
  selector: 'app-boton-elimina',
  template: `
  <app-boton [tipo]="tipo" claseColor="btn-danger" [claseTamanio]="claseTamanio" claseIcono="fa-trash"
  [titulo]="titulo" (clic)="hacerClic()" [disabled]="disabled" [visible]="visible"></app-boton>
  `,
  styles: []
})
export class BotonEliminaComponent extends BotonDefaultComponent {
  constructor() {
    super();
    this.titulo = 'Borrar';
  }
}
