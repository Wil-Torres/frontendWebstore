import { Component, OnInit } from '@angular/core';
import { BotonDefaultComponent } from './boton-default.component';

@Component({
  selector: 'app-boton-nuevo',
  template: `
  <app-boton [tipo]="tipo" claseIcono="fa fa-plus" [claseTamanio]="claseTamanio"
  titulo="Nuevo" (clic)="hacerClic()" [disabled]="disabled" [visible]="visible"></app-boton>
  `,
  styles: []
})
export class BotonNuevoComponent extends BotonDefaultComponent{}
