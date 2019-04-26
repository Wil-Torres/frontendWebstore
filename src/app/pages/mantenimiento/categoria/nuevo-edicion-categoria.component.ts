import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interfaces/categoria';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicioCategoriaService } from 'src/app/services/servicio-categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { isNil } from 'lodash';

@Component({
  selector: 'app-nuevo-edicion-categoria',
  template: `
  <form [formGroup]="forma" name="forma" (ngSubmit)="guardar()" novalidate>
    <div class="d-flex justify-content-end">
      <app-boton-regresa (click)="regresar()"></app-boton-regresa>
      <app-boton-refresca *ngIf="objetoId" (click)="refrescar()"></app-boton-refresca>
      <app-boton-elimina *ngIf="objetoId" (click)="elimina()"></app-boton-elimina>
      <app-boton-guarda (click)="guardar()"></app-boton-guarda>
    </div>
    <div class="gt-titulos-vista">
      <h2 class="titulo">Mantenimiento de categorias</h2>
      <p class="titulo d-sm-none d-none"> {{objetoId ? 'Edicion' : 'Creacion'}}</p>
    </div>
    <div class="row container">
      <div class="col-sm-12 col-md-2 col-lg-2">
        <div class="form-group">
          <label for="codigoCategoria">Código</label>
          <input type="text" class="form-control" id="codigoCategoria" placeholder="Ingrese código"
            formControlName="codigo">
        </div>
      </div>
      <div class="col-sm-12 col-md-10 col-lg-10">
        <div class="form-group">
          <label for="descripcionCategoria">Descripción</label>
          <input type="text" class="form-control" id="descripcionCategoria" placeholder="Ingrese descripción de categoria"
            formControlName="descripcion">
        </div>
      </div>
    </div>
  </form>`,
  styles: []
})
export class NuevoEdicionCategoriaComponent implements OnInit {

  private _objeto: Categoria;
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
  public get objeto(): Categoria {
    return this._objeto;
  }
  public set objeto(v: Categoria) {
    this._objeto = v;
  }

  constructor(private _router: ActivatedRoute, private router: Router, 
    private _api: ServicioCategoriaService, public builder: FormBuilder) {
    this.objInit();
    if(this.objetoId){
      this.obtenerCategoria()
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
      subCategoria: [[]],
    })
  }
  guardar () {
    if(!this.forma.value.codigo || !this.forma.value.descripcion || this.forma.value.codigo === null || this.forma.value.descripcion === null){
      console.error('Falta informacion, verificar datos.');
      return;
    }

    if ( !isNil(this.forma.value.id)  ) {
      this._api.updateCategoria(this.forma.getRawValue()).then(res => {
        console.log(`Categoria ${this.forma.value.descripcion} Acualizado`);
      }).catch(err => {
        console.log(err);
      })

    } else {
      this._api.addCategorias(this.forma.getRawValue()).then(categoria => {
        categoria.update({ id: categoria.id }).then(actualizado => {
          console.log(`Categoria ${this.forma.value.descripcion} creada`);
          this.router.navigate(['/categorias/edicion-categoria/', categoria.id])
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }
  obtenerCategoria () {
    this._api.getCategoria(this._objetoId).subscribe(resp =>{
      console.log(resp);
      this._forma.patchValue(resp, {emitEvent:false})
    })
  }
  regresar () {
    this.router.navigate(['/categorias/lista-categorias']);
  }
  refrescar () {
    this.obtenerCategoria();
  }
  limpiar () {
    this.objInit();
  }
  elimina () {
    this._api.removeCategoria(this.forma.value).then(categoria => {
      this.router.navigate(['/categorias/lista-categorias']);
    }, err => {
      console.error(err);
    })
  }
}
