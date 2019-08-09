import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { FiltroBusqueda } from '../busqueda-lista/busqueda-lista.component';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { isNil } from 'lodash';
import { ServicioProductoService } from 'src/app/services/servicio-producto.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-busqueda-top-productos',
  templateUrl: './busqueda-top-productos.component.html',
  styles: [
    `.w-60 {
      width: 60%;
    }
    .w-40 {
      width: 40%;
    }`
  ]
})
export class BusquedaTopProductosComponent implements OnInit {

  private _listaG: any[] = [];
  private _titulo: string;
  private _totalItems = 10;
  private _regSeleccionados: any[] = [];
  private _camposMostrar: string[] = [];
  private _enviarRegistros: EventEmitter<any[]>;
  private _filtros: FiltroBusqueda[];
  private _campoInicial: string;
  

  constructor(private srvProducto: ServicioProductoService, private _bsModalRef: BsModalRef) {
    this._enviarRegistros = new EventEmitter<any[]>();
    this.titulo = 'Busqueda de Productos';
    this._filtros = [
      { titulo: 'Código', nombre: 'codigo', tipo: 'text', codificado: true, like: true },
      { titulo: 'Descripción', nombre: 'descripcion', tipo: 'text', codificado: true, like: true }
    ];
  }

  private existe(registro: any): boolean {
    return this._regSeleccionados.reduce((encontrado: boolean, reg) => {
      return encontrado || registro.id === reg.id;
    }, false);
  }

  ngOnInit() {
    this.obtenerTop();
    this.buscar();

  }


  get listaG(): any[] {
    return this._listaG;
  }

  get titulo(): string {
    return this._titulo;
  }

  set titulo(value: string) {
    this._titulo = value;
  }

  get totalItems(): number {
    return this._totalItems;
  }

  cancelar() {
    this.limpiar();
    this._bsModalRef.hide();
  }

  async buscar(offset: number = 0, limit: number = 10) {
    this.srvProducto.getProductos(offset, limit).then(resp => {
      resp.subscribe(producto => {
        console.log(producto);
        producto.forEach((registro: any) => {
          registro.seleccionado = false;
          const encontrado = this._regSeleccionados.find((reg) => {
            return registro.id === reg.id;
          });
          if (!isNil(encontrado)) {
            registro.seleccionado = true;
          }
        });
        this._listaG = producto;
        this._totalItems = this.srvProducto.paginacion.totalRegistros;

      })
    })
  }

  seleccionar(registro: any) {
    if (this.existe(registro)) {
      return;
    }
    registro.seleccionado = true;
    this._regSeleccionados.push(registro);
  }
  obtenerTop() {
    let x = this.srvProducto.getTopProducto().subscribe((resp: any) => {
      this._regSeleccionados = resp.productos;
      x.unsubscribe();
    })
  }

  agregar() {
    this._enviarRegistros.emit(this._regSeleccionados);
    this.srvProducto.updateTopProducto({productos: this._regSeleccionados}).then(resp => {
      console.log('ACTUALIZAICON REALIZADA');
    }).catch( err => {
      console.log('ERROR AL ACUTALIZAR')
    });
    this.limpiar();
    this._bsModalRef.hide();
  }

  eliminar(registro: any, index: number) {
    const encontrado = this._listaG.find(reg => {
      return registro.id === reg.id;
    });
    if (!isNil(encontrado)) {
      encontrado.seleccionado = false;
    }
    this._regSeleccionados.splice(index, 1);
  }

  mostrarMultiplesCampos(arr: any[], reg: any) {
    return arr.reduce((campo: string, item: string, index: number) => `${campo}${(index > 0 ? '-' : '')}${reg[item]}`, '');
  }

  get regSeleccionados(): any[] {
    return this._regSeleccionados;
  }

  set regSeleccionados(value: any[]) {
    this._regSeleccionados = value;
  }

  get camposMostrar(): string[] {
    return this._camposMostrar;
  }

  set camposMostrar(value: string[]) {
    this._camposMostrar = value;
  }

  get enviarRegistros(): EventEmitter<any> {
    return this._enviarRegistros;
  }

  get filtros(): FiltroBusqueda[] {
    return this._filtros;
  }

  set filtros(value: FiltroBusqueda[]) {
    this._filtros = value;
  }

  get campoInicial(): string {
    return this._campoInicial;
  }

  @Input() set campoInicial(value: string) {
    this._campoInicial = value;
  }

  limpiar() {
    this._filtros.forEach(filtro => {
      filtro.valor = null;
    });
  }
}
