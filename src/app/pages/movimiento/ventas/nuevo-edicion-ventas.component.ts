import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-edicion-ventas',
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
          <div class="col-12">
              <div class="font-weight-bold row">
                  <label class="w-15 pl-3">Código</label>
                  <label class="w-20 pl-3">NIT</label>
                  <label>Cliente</label>
              </div>
              <div class="input-group">
                  <div class="input-group-prepend w-15">
                      <input type="number" class="form-control spinner-off" [formControlName]="clienteId"
                          placeholder="Código" (blur)="buscarPor(forma.value[clienteId])">
                  </div>
                  <div class="input-group-prepend w-20" [formGroupName]="cliente">
                      <div formGroupName="cliente">
                          <input type="text" class="form-control" formControlName="nit" placeholder="NIT"
                              [value]="forma.value[cliente].cliente.nit" buscarF3 (keydown.f3)="buscar()"
                              (blur)="buscarPorIdentificador(forma.value[cliente].cliente.nit)" uppercase>
                      </div>
                  </div>
                  <div class="flex-grow-1">
                      <input type="text" class="form-control" placeholder="Nombre del cliente"
                          value="nombre del cliente" tabindex="-1" readonly>
                  </div>
                  <div class="input-group-append">
                      <button class="btn btn-light px-2" type="button" title="Limpiar" (click)="limpiar()" tabindex="-1">
                          <i class="fas fa-sync"></i>
                      </button>
                      <button class="btn btn-info px-2" type="button" title="Nuevo" tabindex="-1" (click)="crear()">
                          <i class="fas fa-plus"></i>
                      </button>
                      <button class="btn btn-primary px-2" type="button" title="Buscar" (click)="buscar()">
                          <i class="fas fa-search"></i>
                      </button>
                  </div>
              </div>
          </div>
        </div>
    </form>
  `,
  styles: [`
	.w-15 {
    width: 15%!important;
	}
	.w-20 {
		width: 20%!important;
  }
	`]
})
export class NuevoEdicionVentasComponent implements OnInit {
  clienteId
  cliente
  private _objeto: any;
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
  public get objeto(): any {
    return this._objeto;
  }
  public set objeto(v: any) {
    this._objeto = v;
  }

  constructor(private _router: ActivatedRoute, private router: Router,
    public builder: FormBuilder) {
    this.objInit();
    if (this.objetoId) {
      this.obtenerVenta()
    }
  }

  ngOnInit() {}
  objInit() {
    this._forma = this.builder.group({
      id: null,
      clienteId: null,
      cliente: this.builder.group({
        id: null,
        codigo: null,
        nit: null,
        nombre: null,
      })
    })
  }
  obtenerVenta(){}
  buscarPor(id: number) { }
  buscar() { }
  buscarPorIdentificador(nit: string) { }
  limpiar() { }
  crear() { }


}
