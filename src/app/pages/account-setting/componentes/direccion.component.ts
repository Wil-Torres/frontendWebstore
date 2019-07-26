import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AddressService } from 'src/app/services/account/address.service';
import { DireccionCompra } from 'src/app/interfaces/account-settings';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { isNil } from 'lodash';

@Component({
  selector: 'app-direccion',
  template: `
    <div class="modal-content">
      <div class="modal-header bg-primary text-white d-flex justify-content-left">
        <h4 class="modal-title flex-grow-1 text-center">Agregar Tarjeta</h4>
        <app-boton claseColor="btn-light floar-right" claseIcono="fa-times" titulo="Cerrar" (clic)="cancelar()"></app-boton>
      </div>
      <div class="modal-body">
      <form [formGroup]="forma" name="forma" (ngSubmit)="guardar()" novalidate>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="nombreCompleto">Nombre Completo</label>
              <input type="text" class="form-control" id="nombreCompleto" formControlName="nombreCompleto" required>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <label for="direccion">Dirección</label>
              <input type="text" class="form-control" id="direccion" formControlName="direccion" required>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="pais">País</label>
              <input type="text" class="form-control" id="pais" formControlName="pais" required>
            </div>
          </div>

          <div class="col-md-4">
            <div class="form-group">
              <label for="departamento">Departamento</label>
              <input type="text" class="form-control" id="departamento" formControlName="departamento" required>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="ciudad">Ciudad</label>
              <input type="text" class="form-control" id="ciudad" formControlName="ciudad" required>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label for="codigoPostal">Código postal</label>
              <input type="text" class="form-control" id="codigoPostal" formControlName="codigoPostal" required>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label for="telefono">Numero de teléfono</label>
              <input type="text" class="form-control" id="telefono" formControlName="telefono" required>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <label for="observaciones">Indicaciones especiales</label>
              <input type="text" class="form-control" id="observaciones" formControlName="observaciones" required>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-end">
            <app-boton-guarda tipo="submit" claseColor="btn-primary" claseIcono="fa-check" titulo="Guardar"></app-boton-guarda>
          </div>
        </div>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class DireccionComponent implements OnInit {
  private _objeto: DireccionCompra;
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
  public get objeto(): DireccionCompra {
    return this._objeto;
  }
  public set objeto(v: DireccionCompra) {
    this._objeto = v;
  }


  constructor(private modalRef: BsModalRef, private srvDire: AddressService,
    private _router: ActivatedRoute, private router: Router, public builder: FormBuilder) {
    this.objInit();
    if (this.objetoId) {
      this.obtenerDireccion()
    }
  }

  objInit() {
    this._forma = this.builder.group({
      id: null,
      nombreCompleto: null,
      direccion: null,
      pais: null,
      departamento: null,
      ciudad: null,
      codigoPostal: null,
      telefono: null,
      observaciones: null,
      fechaIngreso: new Date(),
      email: null
    })
  }

  ngOnInit() {
  }

  cancelar() {
    this.modalRef.hide();
  }

  guardar() {
    if (!this.forma.value.nombreCompleto || !this.forma.value.direccion || this.forma.value.pais === null || this.forma.value.departamento === null) {
      console.error('Falta informacion, verificar datos.');
      return;
    }

    if (!isNil(this.forma.value.id)) {
      this.srvDire.updateDireccion(this.forma.getRawValue()).then(res => {
        console.log(`Direccion ${this.forma.value.direccion} Acualizado`);
      }).catch(err => {
        console.log(err);
      })

    } else {
      this.srvDire.addDireccion(this.forma.getRawValue()).then(direccion => {
        direccion.update({ id: direccion.id }).then(actualizado => {
          console.log(`Direccion ${this.forma.value.direccion} creada`);
          this.modalRef.hide();
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }
  obtenerDireccion() {
    this.srvDire.getDireccion(this._objetoId).subscribe(resp => {
      this._forma.patchValue(resp, { emitEvent: false })
    })
  }

  borrarDireccion() {
    this.srvDire.removeDireccion(this.forma.value).then(resp => {
      console.log(resp)
    }, err => {
      console.error(err);
    })
  }

}
