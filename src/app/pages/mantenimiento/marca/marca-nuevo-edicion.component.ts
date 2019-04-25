import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServicioMarcaService } from 'src/app/services/servicio-marca.service';
import { Marca } from 'src/app/interfaces/marca';
import { FormBuilder, FormGroup } from '@angular/forms';
import { isNil } from 'lodash'

@Component({
  selector: 'app-marca-edicion',
  template: `
  <form [formGroup]="forma" name="forma" (ngSubmit)="guardar()" novalidate>
    <app-encabezado-pagina optNew='nueva-marca'></app-encabezado-pagina>
    <button type="submit" class="btn btn-primary"><i class="fa fa-save float-right"></i></button>
    <div class="row container">
      <div class="col-sm-12 col-md-2 col-lg-2">
        <div class="form-group">
          <label for="codigoMarca">Código</label>
          <input type="text" class="form-control" id="codigoMarca" placeholder="Ingrese código Marca"
            formControlName="codigo">
        </div>
      </div>
      <div class="col-sm-12 col-md-10 col-lg-10">
        <div class="form-group">
          <label for="descripcionMarca">Descripción</label>
          <input type="text" class="form-control" id="descripcionMarca" placeholder="Ingrese descripción de marca"
            formControlName="descripcion">
        </div>
      </div>
    </div>
  </form>`,
  styles: []
})
export class MarcaNuevoEdicionComponent implements OnInit {

  private _objeto: Marca;
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
  public get objeto(): Marca {
    return this._objeto;
  }
  public set objeto(v: Marca) {
    this._objeto = v;
  }

  constructor(private _router: ActivatedRoute, private router: Router, private _api: ServicioMarcaService, public builder: FormBuilder) {
    this.objInit();
    if(this.objetoId){
      this.obtenerMarca()
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
      this._api.updateMarca(this.forma.getRawValue()).then(res => {
        console.log(`Marca ${this.forma.value.descripcion} Acualizado`);
      }).catch(err => {
        console.log(err);
      })

    } else {
      this._api.addMarcas(this.forma.getRawValue()).then(marca => {
        marca.update({ id: marca.id }).then(actualizado => {
          console.log(`Marca ${this.forma.value.descripcion} creada`);
          this.router.navigate(['/marcas/edicion-marca/', marca.id])
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }
  obtenerMarca () {
    this._api.getMarca(this._objetoId).subscribe(resp =>{
      console.log(resp);
      this._forma.patchValue(resp, {emitEvent:false})
    })
  }
}
