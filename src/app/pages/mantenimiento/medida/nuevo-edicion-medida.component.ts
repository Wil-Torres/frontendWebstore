import { Component, OnInit } from '@angular/core';
import { Medida } from 'src/app/interfaces/medida';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicioMedidaService } from 'src/app/services/servicio-medida.service';
import { ActivatedRoute, Router } from '@angular/router';
import { isNil } from 'lodash';

@Component({
  selector: 'app-nuevo-edicion-medida',
  template: `
  <form [formGroup]="forma" name="forma" (ngSubmit)="guardar()" novalidate>
    <div class="d-flex justify-content-end">
      <app-boton-regresa (click)="regresar()"></app-boton-regresa>
      <app-boton-refresca *ngIf="objetoId" (click)="refrescar()"></app-boton-refresca>
      <app-boton-elimina *ngIf="objetoId" (click)="elimina()"></app-boton-elimina>
      <app-boton-guarda (click)="guardar()"></app-boton-guarda>
    </div>
    <div class="gt-titulos-vista">
      <h2 class="titulo">Mantenimiento de medidas</h2>
      <p class="titulo d-sm-none d-none"> {{objetoId ? 'Edicion' : 'Creacion'}}</p>
    </div>
    <div class="row container">
      <div class="col-sm-12 col-md-2 col-lg-2">
        <div class="form-group">
          <label for="codigoMedida">Código</label>
          <input type="text" class="form-control" id="codigoMedida" placeholder="Ingrese código"
            formControlName="codigo">
        </div>
      </div>
      <div class="col-sm-12 col-md-10 col-lg-10">
        <div class="form-group">
          <label for="descripcionMedida">Descripción</label>
          <input type="text" class="form-control" id="descripcionMedida" placeholder="Ingrese descripción de medida"
            formControlName="descripcion">
        </div>
      </div>
    </div>
  </form>`,
  styles: []
})
export class NuevoEdicionMedidaComponent implements OnInit {

  private _objeto: Medida;
  private _objetoId: any = this._router.snapshot.paramMap.get('id');
  optNew: any;

  private _forma: FormGroup;
  public get forma(): FormGroup {
    return this._forma;
  }
  public set forma(v: FormGroup) {
    this._forma = v;
  }
  public get objetoId(): any {
    return this._objetoId;
  }
  public set objetoId(v: any) {
    this._objetoId = v;
  }
  public get objeto(): Medida {
    return this._objeto;
  }
  public set objeto(v: Medida) {
    this._objeto = v;
  }

  constructor(private _router: ActivatedRoute, private router: Router,
     private _api: ServicioMedidaService, public builder: FormBuilder) {
    this.objInit();
    if(this.objetoId){
      this.obtenerMedida()
    }
  }
  ngOnInit() {
  }

  objInit() {
    this._forma = this.builder.group({
      id: null,
      descripcion: null,
      codigo: null,
      fechaIngreso: new Date(),
    })
  }
  guardar () {
    if(!this.forma.value.codigo || !this.forma.value.descripcion || this.forma.value.codigo === null || this.forma.value.descripcion === null){
      console.error('Falta informacion, verificar datos.');
      return;
    }

    if ( !isNil(this.forma.value.id)  ) {
      this._api.updateMedida(this.forma.getRawValue()).then(res => {
        console.log(`Medida ${this.forma.value.descripcion} Acualizado`);
      }).catch(err => {
        console.log(err);
      })

    } else {
      this._api.addMedidas(this.forma.getRawValue()).then(medida => {
        medida.update({ id: medida.id }).then(actualizado => {
          console.log(`medida ${this.forma.value.descripcion} creada`);
          this.router.navigate(['/medidas/edicion-medida/', medida.id])
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }
  obtenerMedida () {
    this._api.getMedida(this._objetoId).subscribe(resp =>{
      console.log(resp);
      this._forma.patchValue(resp, {emitEvent:false})
    })
  }
  regresar () {
    this.router.navigate(['/medidas/lista-medidas']);
  }
  refrescar () {
    this.obtenerMedida();
  }
  limpiar () {
    this.objInit();
  }
  elimina () {
    this._api.removeMedida(this.forma.value).then(nedida => {
      this.router.navigate(['/nedidas/lista-nedidas']);
    }, err => {
      console.error(err);
    })
  }
}
