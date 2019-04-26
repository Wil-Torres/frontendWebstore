import { Component, OnInit } from '@angular/core';
import { BotonDefaultComponent } from './boton-default.component';

@Component({
  selector: 'app-boton-edita',
  template: `
    <app-boton [tipo]="tipo" claseColor="btn-info" [claseTamanio]="claseTamanio" claseIcono="fa-pencil"
    titulo="Editar" (clic)="hacerClic()" [disabled]="disabled" [visible]="visible"></app-boton>
  `,
  styles: []
})
export class BotonEditaComponent extends BotonDefaultComponent {}