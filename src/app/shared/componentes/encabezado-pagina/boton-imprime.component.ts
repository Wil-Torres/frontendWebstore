import { Component, OnInit } from '@angular/core';
import { BotonDefaultComponent } from './boton-default.component';

@Component({
  selector: 'app-boton-imprime',
  template: `
    <app-boton [tipo]="tipo" claseColor="btn-light border" [claseTamanio]="claseTamanio" claseIcono="fa-print"
    titulo="Imprimir" (clic)="hacerClic()" [disabled]="disabled" [visible]="visible"></app-boton>
  `,
  styles: []
})
export class BotonImprimeComponent extends BotonDefaultComponent{}
