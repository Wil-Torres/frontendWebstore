import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { isNil, cloneDeep } from 'lodash'
import { FormBuilder, FormGroup } from '@angular/forms';

export interface Opciones {
  operacionId: number;
}

export interface CamposSeleccion {
  clase: string;
  titulo: string;
  nombre: string | string[];
  uppercase?: boolean;
  esFecha?: boolean;
  esArreglo?: boolean;
}

export interface Filtro {
  titulo: string;
  valor: string;
  tipo: string;
  lista: any[];
  rango: string;
  nombresRango: string[];
}

export interface FiltroBusqueda {
  titulo: string;
  nombre: string;
  tipo: string;
  codificado: boolean;
  like: boolean;
  lista?: any[];
  rango?: boolean;
  nombresRango?: string[];
  valor?: any;
  estatico?: boolean;
}

@Component({
  selector: 'app-busqueda-lista',
  template: `
  <form [formGroup]="forma" class="form-horizontal" name="filtros" (ngSubmit)="buscar()" ngNativeValidate>
    <div class="row d-flex justify-content-between">
      <div class="col flex-grow-1"> Buscar por:
        <div class="custom-control custom-radio custom-control-inline" *ngFor="let filtro of filtros">
          <input type="radio" class="custom-control-input" [id]="'F' + filtro.nombre" formControlName="actual" name="actual"
            [value]="filtro">
          <label class="custom-control-label" [for]="'F' + filtro.nombre" [title]="filtro.valor || ''">{{filtro.titulo}}</label>
        </div>
      </div>
      <div class="col flex-grow-0">
        <div class="btn-group dropleft">
          <button class="btn btn-light btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false" title="Filtros aplicar">
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item font-weight-bolder" *ngIf="filtrosAplicados.length > 0" (click)="limpiar(true)">Borrar filtros</a>
            <a class="dropdown-item" *ngFor="let filtro of filtrosAplicados">{{filtro.titulo}}:
              {{filtro.valor}}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row" *ngIf="!(actual?.tipo === 'range' || actual?.tipo === 'list')">
      <div class="col">
        <div class="form-group">
          <div class="input-group">
            <input [type]="actual?.tipo" formControlName="buscar" class="form-control" placeholder="Buscar"
              [ngClass]="{ 'gt-uppercase' : actual?.tipo === 'text' }" #tipo>
            <div class="input-group-append">
              <button *ngIf="actual?.valor" type="button" class="btn btn-danger" title="Borrar filtro" (click)="limpiar()" tabindex="-1">
                <i class="fa fa-times-circle"></i>
              </button>
              <button type="submit" class="btn btn-primary text-white" title="Buscar" tabindex="-1">
                <i class="fa fa-search-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" *ngIf="actual?.tipo === 'list'">
      <div class="col">
        <div class="form-group">
          <div class="input-group">
            <select class="form-control" formControlName="selected" name="actual">
              <option [value]="null"> TODOS(AS) </option>
              <option [value]="item" *ngFor="let item of actual?.lista">{{item}}</option>
            </select>
            <div *ngIf="actual?.valor" class="input-group-append">
              <button type="button" class="btn btn-danger" title="Borrar filtro" (click)="limpiar()" tabindex="-1">
                <i class="fa fa-times-circle"></i>
              </button>
              <button type="submit" class="btn btn-primary text-white" title="Buscar">
                <i class="fa fa-search-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  `,
  styles: [`
  .input-group-append {
    margin-left: 0;
  }
  `]
})
export class BusquedaListaComponent implements OnInit {

  private _filtros: FiltroBusqueda[] = [];
  private _actual: FiltroBusqueda;
  // private _recurso: RecursoWeb<any>;
  private readonly EmitEvent = { emitEvent: false };

  @ViewChild('tipo') private tipo: ElementRef;
  private _busqueda: EventEmitter<any> = new EventEmitter();
  private _forma: FormGroup;
  public get forma(): FormGroup {
    return this._forma;
  }
  public set forma(v: FormGroup) {
    this._forma = v;
  }
  constructor(private builder: FormBuilder) {
    this.forma = this.builder.group({
      actual: null,
      buscar: null,
      selected: null,
    });
  }

  ngOnInit() {
    if (isNil(this._actual)) {
      this._actual = this._filtros[0];
    }
    this.forma.patchValue({ actual: this._actual }, this.EmitEvent);
  }

  ngOnDestroy() {
    // this._filtros.forEach((filtro: FiltroBusqueda) => this._recurso.filtros.delete(filtro.nombre, true));
  }

  protected onChanges() {
    // Si cambia el radio actual
    this._forma.get('actual').valueChanges.subscribe((actual: any) => {
      this._actual = actual;
      if (this._actual.tipo !== 'list' && !isNil(this.tipo)) {
        this.tipo.nativeElement.type = this._actual.tipo === 'list' ? 'text' : this._actual.tipo;
        this.forma.patchValue({ buscar: actual.valor, selected: null }, this.EmitEvent);
      }
    });
    // Si cambia el valor del text box
    this._forma.get('buscar').valueChanges.subscribe((buscar: any) => {
      this._actual.valor = isNil(buscar) || buscar === '' ? null : buscar;
      this.forma.patchValue({ actual: this._actual }, this.EmitEvent);
      this.actualizarFiltros(this._actual);
    });
    // Si cambia el selected
    this._forma.get('selected').valueChanges.subscribe((selected: any) => {
      this._actual.valor = isNil(selected) || selected === 'null' ? null : selected;
      this.forma.patchValue({ actual: this._actual }, this.EmitEvent);
      this.actualizarFiltros(this._actual);
    });
  }

  actualizarFiltros(actual: FiltroBusqueda) {
    //this._recurso.filtros.delete(actual.nombre);
    if (!isNil(actual.valor)) {
      const { nombre, valor, codificado, like , estatico= false } = actual;
      // this._recurso.filtros.add(nombre, valor, codificado, like, estatico);
    }
  }

  buscar() {
    /*if (isNil(this._recurso)) {
      return;
    }*/
    const filtros = cloneDeep(this.filtros);
    filtros.forEach((filtro: FiltroBusqueda) => {
      if (!isNil(filtro.valor)) {
        const { nombre, valor, codificado, like, estatico= false } = filtro;
        // this._recurso.filtros.add(nombre, valor, codificado, like, estatico);
      }
    });
    this._busqueda.emit(filtros);
    this.tipo.nativeElement.focus();
  }

  limpiar(todos: boolean = false) {
    if (todos) {
      this.filtros.forEach((filtro: FiltroBusqueda) => {
        filtro.valor = null;
      });
    }
    this.actual.valor = null;
    this.forma.patchValue({ actual: this._actual, buscar: null, selected: null }, this.EmitEvent);
    this.buscar();
  }

  get filtros(): FiltroBusqueda[] {
    return this._filtros;
  }

  @Input() set filtros(value: FiltroBusqueda[]) {
    this._filtros = value;
  }

  get filtrosAplicados(): FiltroBusqueda[] {
    return (this._filtros || []).filter((item: FiltroBusqueda) => !isNil(item.valor));
  }

  /* @Input() set recurso(value: RecursoWeb<any>) {
    this._recurso = value;
  }*/

  get actual(): FiltroBusqueda {
    return this._actual;
  }

  set actual(value: FiltroBusqueda) {
    this._actual = value;
  }

  @Output() get busqueda(): EventEmitter<FiltroBusqueda[]> {
    return this._busqueda;
  }

  @Input() set campoInicial(value: string) {
    this._actual = this._filtros.find((filtro: FiltroBusqueda) => filtro.nombre === value);
    this.forma.patchValue({ actual: this._actual, buscar: null, selected: null }, this.EmitEvent);
  }

}
