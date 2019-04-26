import { Component, OnInit } from '@angular/core';
import { BotonDefaultComponent } from './boton-default.component';

@Component({
  selector: 'app-boton-regresa',
  template: `
    <app-boton [tipo]="tipo" claseColor="btn-light border" [claseTamanio]="claseTamanio" claseIcono="fa-arrow-left"
    titulo="Regresar" (clic)="hacerClic()" [disabled]="disabled" [visible]="visible"></app-boton>
  `,
  styles: []
})
export class BotonRegresaComponent extends BotonDefaultComponent { }
