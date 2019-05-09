import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { isNil } from 'lodash'
import { ServicioProductoService } from 'src/app/services/servicio-producto.service';
import { ServicioComprasService } from 'src/app/services/servicio-compras.service';

@Component({
  selector: 'app-nuevo-edicion-compras',
  templateUrl: './compras.html',
  styles: [`
	.w-15 {
    width: 15%!important;
	}
	.w-20 {
		width: 20%!important;
  }
	`]
})
export class NuevoEdicionComprasComponent implements OnInit {
  private _objeto: any;
  private _objetoId: any = this._router.snapshot.paramMap.get('id');

  private _detalle: any = {
    id: null,
    productoId: null,
    producto: {
      nombre: null,
      id: null
    },
    cantidad: null,
    precio: 0,
    iva: 0,
    total: 0
  };
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
  public get objeto(): any {
    return this._objeto;
  }
  public set objeto(v: any) {
    this._objeto = v;
  }
  public get detalle(): any {
    return this._detalle;
  }
  public set detalle(v: any) {
    this._detalle = v;
  }


  constructor(private _router: ActivatedRoute, private router: Router,
    public builder: FormBuilder, private srvProductos: ServicioProductoService,
    private srvCompras: ServicioComprasService) {
    this.objInit();
    if (this.objetoId) {
      this.obtenerCompra()
    }
    console.log(this.forma.value)
  }

  ngOnInit() {
   }
  objInit() {
    this._forma = this.builder.group({
      id: null,
      proveedorId: 1,
      serie: null,
      correlativo: null,
      fecha: new Date(),
      proveedor: this.builder.group({
        id: 1,
        codigo: 1,
        nit: 6258223 - 2,
        nombre: 'Wilson Gerardo Torres Castellanos',
      }),
      detalleCompras: [[]]
    })
  }
  obtenerCompra() { }
  buscarPor(id: number) { }
  buscar() { }
  buscarPorIdentificador(nit: string) { }
  limpiar() { }
  crear() { }
  elimina() { }
  guardar() {
    if ( !isNil(this.forma.value.id)  ) {
      this.srvCompras.addCompras(this.forma.getRawValue()).then(res => {
        console.log(`Compra Acualizada`);
      }).catch(err => {
        console.log(err);
      })
    } else {
      this.srvCompras.addCompras(this.forma.getRawValue()).then(compra => {
        this.actualizarExistencias(this.forma.getRawValue());
        compra.update({ id: compra.id }).then(actualizado => {
          this.router.navigate(['/compras/edicion-compra/', compra.id])
        })
      }).catch(err => {
        console.log(err)
      })
    }

  }

  actualizarExistencias(compra: any){
    compra.detalleCompras.forEach((elems) => {
      let x = this.srvCompras.buscarExistencia(elems.producto.id).subscribe((elem:any) => {
        elem[0].ingresosCompras += elems.cantidad;
        elem[0].costoOriginal += elems.precio;
        this.srvCompras.actualizarExistencia(elem[0]);
        x.unsubscribe();
      })
    });
  }
  regresar() { }
  refrescar() { }
  buscarEntidad() { }


  cancelar() {
    this.detalle = {};
  }
  agregarDetalle() {
    let validar = this.validarDetalle();
    if (validar.error) {
      alert(validar.mensaje);
      return;
    }
    this.forma.value.detalleCompras.push(this.detalle);
  }
  buscarProducto() {
    this.srvProductos.obtenerProductoCodigo(this.detalle.productoId).subscribe(resp => {
      this.detalle.producto = resp[0];
    });
  }
  validarDetalle() {
    if (isNil(this.detalle.productoId)) {
      return { error: true, mensaje: 'Falta codigo de producto' };
    }
    if (isNil(this.detalle.cantidad)) {
      return { error: true, mensaje: 'Falta ingresar la cantidad' };
    }
    if (isNil(this.detalle.precio)) {
      return { error: true, mensaje: 'Falta ingresar el precio del producto' };
    }
    if (isNil(this.detalle.iva)) {
      return { error: true, mensaje: 'Falta ingresar el valor del iva' };
    }
    return { error: false }
  };
}
