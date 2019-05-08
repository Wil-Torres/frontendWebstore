import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-nuevo-edicion-compras',
  templateUrl: './compras.html' ,
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
      this.obtenerCompra()
    }
    console.log(this.forma.value)
  }

  ngOnInit() { }
  objInit() {
    this._forma = this.builder.group({
      id: null,
      proveedorId: null,
      proveedor: this.builder.group({
        id: null,
        codigo: null,
        nit: null,
        nombre: null,
      })
    })
  }
  obtenerCompra() { }
  buscarPor(id: number) { }
  buscar() { }
  buscarPorIdentificador(nit: string) { }
  limpiar() { }
  crear() { }
  elimina() {}
  guardar() {}

}
