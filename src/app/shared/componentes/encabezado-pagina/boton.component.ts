import { Component, OnInit } from '@angular/core';
import { BotonDefaultComponent } from './boton-default.component';

@Component({
  selector: 'app-boton',
  template: `
    <button *ngIf="visible" [type]="tipo" class="btn {{claseColor}} {{claseTamanio}} ml-1"
    data-toggle="tooltip" title="{{titulo || 'Sin Título'}}"
      (click)="hacerClic()" [disabled]="disabled">
      <i class="fa {{claseIcono}}"></i>
    </button>
  `,
  styles: []
})
export class BotonComponent extends BotonDefaultComponent{

}
