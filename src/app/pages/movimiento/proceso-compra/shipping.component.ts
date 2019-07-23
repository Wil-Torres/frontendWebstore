import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shipping',
  template: `
  <div class="card col-xl-12 col-lg-12">
  <form  [formGroup]="forma" name="forma" novalidate>
    <h4>Elija el método de envío</h4>
    <hr>
    <div class="table-responsive">
      <table class="table table-fixed">
        <thead>
          <tr>
            <th></th>
            <th>Método de envío</th>
            <th>Tiempo de entrega</th>
            <th>Cuota de manejo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="custom-control custom-radio mb-0">
                <input class="custom-control-input" type="radio" id="courier" name="tipo" [value]="1"
                  formControlName="tipo">
                <label class="custom-control-label" for="courier"></label>
              </div>
            </td>
            <td><span class="text-medium">Mensajero</span><br><span class="text-muted text-sm">Todas las direcciones (zona
                predeterminada), Guatemala</span></td>
            <td>2 - 4 dias</td>
            <td>Q22.50</td>
          </tr>
          <tr>
            <td>
              <div class="custom-control custom-radio mb-0">
                <input class="custom-control-input" type="radio" id="local" name="tipo" [value]="2"
                  formControlName="tipo">
                <label class="custom-control-label" for="local"></label>
              </div>
            </td>
            <td><span class="text-medium">Envio Local</span><br><span class="text-muted text-sm">Todas las direcciones
                (zona
                predeterminada), Guatemala</span></td>
            <td>hasta una semana</td>
            <td>Q10.00</td>
          </tr>
          <tr>
            <td>
              <div class="custom-control custom-radio mb-0">
                <input class="custom-control-input" type="radio" id="flat" name="tipo" [value]="3"
                  formControlName="tipo">
                <label class="custom-control-label" for="flat"></label>
              </div>
            </td>
            <td><span class="text-medium">Tarifa plana </span><br><span class="text-muted text-sm">Todas las direcciones
                (zona
                predeterminada)
              </span></td>
            <td>5 - 7 dias</td>
            <td>Q33.85</td>
          </tr>
          <tr>
            <td>
              <div class="custom-control custom-radio mb-0">
                <input class="custom-control-input" type="radio" id="ups" name="tipo" [value]="4"
                  formControlName="tipo">
                <label class="custom-control-label" for="ups"></label>
              </div>
            </td>
            <td><span class="text-medium">Envío terrestre de UPS</span><br><span class="text-muted text-sm">Todas las
                direcciones
                (zona predeterminada)
              </span></td>
            <td>4 - 6 dias</td>
            <td>Q18.00</td>
          </tr>
          <tr>
            <td>
              <div class="custom-control custom-radio mb-0">
                <input class="custom-control-input" type="radio" id="pickup" name="tipo" [value]="5"
                  formControlName="tipo">
                <label class="custom-control-label" for="pickup"></label>
              </div>
            </td>
            <td><span class="text-medium">Recogida local de la tienda</span><br><span class="text-muted text-sm">Todas las
                direcciones (zona predeterminada)</span></td>
            <td>—</td>
            <td>Q0.00</td>
          </tr>
          <tr>
            <td>
              <div class="custom-control custom-radio mb-0">
                <input class="custom-control-input" type="radio" id="locker" name="tipo" [value]="6"
                  formControlName="tipo">
                <label class="custom-control-label" for="locker"></label>
              </div>
            </td>
            <td><span class="text-medium">Recoger en Unishop Locker </span><br><span class="text-muted text-sm">Todas las
                direcciones
                (zona predeterminada), Guatemala</span></td>
            <td>—</td>
            <td>Q9.99</td>
          </tr>
          <tr>
            <td>
              <div class="custom-control custom-radio mb-0">
                <input class="custom-control-input" type="radio" id="global" name="tipo"
                  formControlName="tipo">
                <label class="custom-control-label" for="global"></label>
              </div>
            </td>
            <td><span class="text-medium">Unishop Global Export</span><br><span class="text-muted text-sm">Todas las
                direcciones
                (zona predeterminada), fuera de la ciudad de Guatemala</span></td>
            <td>3 - 4 dias</td>
            <td>Q25.00</td>
          </tr>
        </tbody>
      </table>
    </div>
    </form>
  </div>
  `,
  styles: []
})
export class ShippingComponent implements OnInit {

  @Input('obj1') public objeto: any = {}
  @Output() obj: EventEmitter<any> = new EventEmitter();
  private _forma: FormGroup;

    public get forma(): FormGroup {
        return this._forma;
    }
    public set forma(v: FormGroup) {
        this._forma = v;
    }
  constructor(public builder: FormBuilder) {
    this.objInit();
    let x = this.procesoFacturacion().subscribe(res => {
      this.obj.emit(this.objeto);
      x.unsubscribe();
    })
  }

  ngOnInit() {
  }
  objInit() {
    this._forma = this.builder.group({
        tipo: 0,
    })
}
  procesoFacturacion(): Observable<{}> {
    let obs = new Observable(observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        this.obj.emit(this.objeto);
        observer.next(contador)
        if (contador === 5) {
          clearInterval(intervalo);
          observer.complete();
        }
      }, 1000)

    });
    return obs;
  }

}
