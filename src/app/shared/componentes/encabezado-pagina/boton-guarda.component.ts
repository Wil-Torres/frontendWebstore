import { Component, OnInit } from '@angular/core';
import { BotonDefaultComponent } from './boton-default.component';

@Component({
  selector: 'app-boton-guarda',
  template: `
    <app-boton [tipo]="tipo" claseIcono="fa-save" [claseTamanio]="claseTamanio"
    titulo="Guardar" (clic)="hacerClic()" [disabled]="disabled" [visible]="visible"></app-boton>
  `,
  styles: []
})
export class BotonGuardaComponent extends BotonDefaultComponent{}
