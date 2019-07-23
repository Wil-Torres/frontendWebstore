import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-datos-facturacion',
    template: `
  <div class="card col-xl-12 col-lg-12">
      <form  [formGroup]="forma" name="forma" novalidate>
      <hr>
      <div class="row">
          <div class="col-sm-6" gtRequerido>
              <div class="form-group">
                  <label for="checkout-fn">Nombre</label>
                  <input class="form-control form-control-sm" type="text" id="checkout-fn" formControlName="nombre" name="nombre"
                      required>
              </div>
          </div>
          <div class="col-sm-6" gtRequerido>
              <div class="form-group">
                  <label for="checkout-ln">Apellidos</label>
                  <input class="form-control form-control-sm" type="text" id="checkout-ln" formControlName="apellido" name="apellido" required>
                      
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-sm-6" gtRequerido>
              <div class="form-group">
                  <label for="checkout-email">Correo Electronico</label>
                  <input class="form-control form-control-sm" type="email" id="checkout-email" formControlName="correoElectronico" name="correoElectronico" required>
                      
              </div>
          </div>
          <div class="col-sm-6" gtRequerido>
              <div class="form-group">
                  <label for="checkout-phone">Numero Telefonico</label>
                  <input class="form-control form-control-sm" type="text" id="checkout-phone" formControlName="telefono" name="telefono" required>
                      
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-sm-6" gtRequerido>
              <div class="form-group">
                  <label for="checkout-company">Compania</label>
                  <input class="form-control form-control-sm" type="text" id="checkout-company" formControlName="compania" name="compania" required>
                      
              </div>
          </div>
          <div class="col-sm-6">
              <div class="form-group" gtRequerido>
                  <label for="checkout-country">Pais</label>
                  <select class="form-control form-control-sm" id="checkout-country" formControlName="pais" name="pais">
                      <option>Choose country</option>
                      <option [value]="1">Guatemala</option>
                  </select>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-sm-6" gtRequerido>
              <div class="form-group">
                  <label for="checkout-city">Departamento</label>
                  <select class="form-control form-control-sm" id="checkout-city" formControlName="departamento" name="departamento">
                      <option>Choose city</option>
                      <option [value]="1">Guatemala</option>
                      <option [value]="2">Escuintla</option>
                      <option [value]="3">Jutiapa</option>
                      <option [value]="4">San Marcos</option>
                      <option [value]="5">Coban</option>
                  </select>
              </div>
          </div>
          <div class="col-sm-6" gtRequerido>
              <div class="form-group">
                  <label for="checkout-zip">Codigo Postal</label>
                  <input class="form-control form-control-sm" type="text" id="checkout-zip" formControlName="codigoPostal" name="codigoPostal" required>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-sm-6" gtRequerido>
              <div class="form-group">
                  <label for="checkout-address1">Direccion</label>
                  <input class="form-control form-control-sm" type="text" id="checkout-address1" formControlName="direccionPrincipal" name="direccionPrincipal" required>
                      
              </div>
          </div>
          <div class="col-sm-6" gtRequerido>
              <div class="form-group">
                  <label for="checkout-address2">Direccion Alternativa</label>
                  <input class="form-control form-control-sm" type="text" id="checkout-address2" formControlName="direccionAlterna" name="direccionAlterna" required>
                      
              </div>
          </div>
      </div>
      <h4>Direccion de Envio</h4>
      <hr>
      <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="same_address" formControlName="checkeaEnvio" name="checkeaEnvio" required>
              
          <label class="custom-control-label" for="same_address">La misma que la direccion de facturacion</label>
      </div>
      </form>
  </div>
  `,
    styles: []
})
export class DatosFacturacionComponent implements OnInit {

    private _objeto: any = {};
    private _forma: FormGroup;

    public get forma(): FormGroup {
        return this._forma;
    }
    public set forma(v: FormGroup) {
        this._forma = v;
    }
    public get objeto(): any {
        return this._objeto;
    }
    @Input('obj1') public set objeto(v: any) {
        console.log(v)
        this._objeto = v;
    }
    @Output() obj: EventEmitter<any> = new EventEmitter();
    constructor(public builder: FormBuilder) {
        this.objInit();
        let x = this.procesoFacturacion().subscribe(res => {
            this.obj.emit(this.objeto);
            x.unsubscribe();
        })
    }

    objInit() {
        this._forma = this.builder.group({
            nombre: null,
            apellido: null,
            correoElectronico: null,
            telefono: null,
            compania: null,
            pais: null,
            departamento: null,
            codigoPostal: null,
            direccionPrincipal: null,
            direccionAlterna: null,
            checkeaEnvio: null,

        })
    }

    ngOnInit() {
        this.onChanges();
    }
    procesoFacturacion(): Observable<{}> {
        let obs = new Observable(observer => {
            let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        this.obj.emit(this._forma.getRawValue());
        observer.next(contador)
        if (contador === 5) {
          clearInterval(intervalo);
          observer.complete();
        }
      }, 1000)
        });
        return obs;
    }
    protected onChanges(): void  {
        this._forma.valueChanges.subscribe(resp => {
            this.objeto = resp;
            this.obj.emit(this.objeto);
        });
        

    }

}
