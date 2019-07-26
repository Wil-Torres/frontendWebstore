import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AddressService } from 'src/app/services/account/address.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { isNil } from 'lodash';
import { TarjetaCompra } from 'src/app/interfaces/account-settings';
import { PaymentsService } from 'src/app/services/account/payments.service';

@Component({
  selector: 'app-tarjeta',
  template: `
    <div class="modal-content">
      <div class="modal-header bg-primary text-white d-flex justify-content-left">
        <h4 class="modal-title flex-grow-1 text-center">Agregar Tarjeta</h4>
        <app-boton claseColor="btn-light floar-right" claseIcono="fa-times" titulo="Cerrar" (clic)="cancelar()"></app-boton>
      </div>
      <div class="modal-body">
        <form [formGroup]="forma" name="forma" (ngSubmit)="guardar()" novalidate>
          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <label for="nombreTarjeta">Nombre de Tarjeta</label>
                <input type="text" class="form-control" id="nombreTarjeta" formControlName="nombreTarjeta" required>
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="numeroTarjeta">Numero de Tarjeta</label>
                <input type="text" class="form-control" id="numeroTarjeta" formControlName="numeroTarjeta" required>
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-group">
                <label for="fechaExpiracion">Fecha de Expiración</label>
                <div class="input-group">
                  <input type="text" class="form-control" id="mesExpiracion" formControlName="mesExpiracion" required>
                  <input type="text" class="form-control" style="width: 50%;" id="anioExpiracion" formControlName="anioExpiracion" required>
                  <span>
                    <button type="submit" class="btn btn-primary">Agregar Tarjeta</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class TarjetaComponent implements OnInit {
  private _objeto: TarjetaCompra;
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
  public get objeto(): TarjetaCompra {
    return this._objeto;
  }
  public set objeto(v: TarjetaCompra) {
    this._objeto = v;
  }


  constructor(private modalRef: BsModalRef, private srvpayment: PaymentsService,
    private _router: ActivatedRoute, private router: Router, public builder: FormBuilder) {
    this.objInit();
    if (this.objetoId) {
      this.obtenerTarjeta()
    }
  }

  objInit() {
    this._forma = this.builder.group({
      id: null,
      nombreTarjeta: null,
      numeroTarjeta: null,
      mesExpiracion: null,
      anioExpiracion: null,
      fechaCreacion: new Date(),
    })
  }

  ngOnInit() {
  }

  cancelar() {
    this.modalRef.hide();
  }

  guardar() {
    if (!this.forma.value.nombreTarjeta || !this.forma.value.numeroTarjeta || this.forma.value.mesExpiracion === null || this.forma.value.anioExpiracion === null) {
      console.error('Falta informacion, verificar datos.');
      return;
    }

    if (!isNil(this.forma.value.id)) {
      this.srvpayment.updateTarjeta(this.forma.getRawValue()).then(res => {
        console.log(`Tarjeta ${this.forma.value.direccion} Acualizado`);
      }).catch(err => {
        console.log(err);
      })

    } else {
      this.srvpayment.addTarjeta(this.forma.getRawValue()).then(formaPago => {
        formaPago.update({ id: formaPago.id }).then(actualizado => {
          console.log(`Tarjeta de ${this.forma.value.nombreTarjeta} creada`);
          this.modalRef.hide();
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }
  obtenerTarjeta() {
    this.srvpayment.getTarjeta(this._objetoId).subscribe(resp => {
      this._forma.patchValue(resp, { emitEvent: false })
    })
  }

  borrarDireccion() {
    this.srvpayment.removeTarjeta(this.forma.value).then(resp => {
      console.log(resp)
    }, err => {
      console.error(err);
    })
  }

}
