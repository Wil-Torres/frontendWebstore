import { Component, OnInit } from '@angular/core';
import { BotonDefaultComponent } from './boton-default.component';

@Component({
  selector: 'app-boton-refresca',
  template: `
    <app-boton [tipo]="tipo" claseColor="btn-light border" [claseTamanio]="claseTamanio" claseIcono="fa-refresh"
    titulo="Refrescar" (clic)="hacerClic()" [disabled]="disabled" [visible]="visible"></app-boton>
  `,
  styles: []
})
export class BotonRefrescaComponent extends BotonDefaultComponent { }
