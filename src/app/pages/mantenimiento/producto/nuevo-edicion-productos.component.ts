import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioProductoService } from 'src/app/services/servicio-producto.service';
import { isNil } from 'lodash';
import swal from 'sweetalert';

@Component({
  selector: 'app-nuevo-edicion-productos',
  templateUrl: './nuevo-edicion-productos.component.html',
  styles: []
})
export class NuevoEdicionProductosComponent implements OnInit {
  private _objeto: Producto;
  path: string = '';
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
  public get objeto(): Producto {
    return this._objeto;
  }
  public set objeto(v: Producto) {
    this._objeto = v;
  }

  constructor(private _router: ActivatedRoute, private router: Router, 
    private _api: ServicioProductoService, public builder: FormBuilder) {
    this.objInit();
    if (this.objetoId) {
      this.path = this.objetoId;
      this.obtenerProducto()
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
      nombre: null,
      descuento: null,
      precio: null,
      marca:null,
      categorias: [[]],
      imagenes:[[]],
      color:[[]],
      preview: [[]],
      talla:null,
      rating: null,
    })
  }
  guardar() {
    if (!this.forma.value.codigo || !this.forma.value.descripcion || this.forma.value.codigo === null || this.forma.value.descripcion === null) {
      swal('Ocurrio un error', 'Falta informacion, verificar datos.', 'error').then(() => {});
      return;
    }

    if (!isNil(this.forma.value.id)) {
      this._api.updateProducto(this.forma.getRawValue()).then(res => {
        swal('Actualización', 'Se ha acutalizado producto', 'success').then(() => {});
      }).catch((err:any) => {
        swal('Ocurrio un error', err, 'error').then(() => {});
      })

    } else {
      this._api.addProductos(this.forma.getRawValue()).then(producto => {
        producto.update({ id: producto.id }).then(actualizado => {
          swal('Nuevo registro', 'Se ha creado el producto ' + this.forma.value.descripcion  , 'success').then(() => {
            this.router.navigate(['/productos/edicion-producto/', producto.id])
          });
        })
      }).catch(err => {
        swal('Ocurrio un error', err, 'error').then(() => {});
      })
    }
  }
  obtenerProducto() {
    this._api.getProducto(this._objetoId).subscribe(resp => {
      this._forma.patchValue(resp, { emitEvent: true })
    })
  }
  regresar() {
    this.router.navigate(['/productos/lista-productos']);
  }
  refrescar() {
    this.obtenerProducto();
  }
  limpiar() {
    this.objInit();
  }
  elimina() {
    this._api.removeProducto(this.forma.value).then(producto => {
      this.router.navigate(['/productos/lista-productos']);
    }, err => {
      swal('Ocurrio un error', err, 'error').then(() => {});
    })
  }

}
