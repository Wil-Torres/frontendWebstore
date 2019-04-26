import { Component, OnInit } from '@angular/core';
import { BotonDefaultComponent } from './boton-default.component';

@Component({
  selector: 'app-boton-limpia',
  template: `
    <app-boton [tipo]="tipo" claseColor="btn-danger" [claseTamanio]="claseTamanio" claseIcono="fa-ban"
    titulo="Cancelar" (clic)="hacerClic()" [disabled]="disabled" [visible]="visible"></app-boton>
  `,
  styles: []
})
export class BotonLimpiaComponent extends BotonDefaultComponent {}
