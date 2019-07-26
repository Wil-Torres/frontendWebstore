import { Component, OnInit } from '@angular/core';
import { ServicioCategoriaService } from 'src/app/services/servicio-categoria.service';
import { ServicioMarcaService } from 'src/app/services/servicio-marca.service';
import { ServicioMedidaService } from 'src/app/services/servicio-medida.service';
import { ServicioProductoService } from 'src/app/services/servicio-producto.service';
import { ServicioCestaService } from 'src/app/services/servicio-cesta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  .tamanio-img{
    height: 160px;
  }
  .change-cursor{
    cursor: pointer;
  }
  .contenido-producto{
    text-align: -webkit-auto
  }
  .contenido-producto-desc{
    text-align: justify
  }
  `]
})
export class HomeComponent implements OnInit {
  
  private _categorias : any[] = [];
  private _marcas : any[] = [];
  private _medidas : any[] = [];
  private _productos : any[] = [];
  orden: any;


  public get productos() : any[] {
    return this._productos;
  }
  public set productos(v : any[]) {
    this._productos = v;
  }
  public get medidas() : any[] {
    return this._medidas;
  }
  public set medidas(v : any[]) {
    this._medidas = v;
  }
  public get marcas() : any[] {
    return this._marcas;
  }
  public set marcas(v : any[]) {
    this._marcas = v;
  }
  public get categorias() : any[] {
    return this._categorias;
  }
  public set categorias(v : any[]) {
    this._categorias = v;
  }
  compra: any = [];
  

  constructor(private srv_categoria: ServicioCategoriaService,
    private srv_marca: ServicioMarcaService, private srv_medida: ServicioMedidaService,
    private srv_producto: ServicioProductoService, private srv_cesta: ServicioCestaService,
    private router: Router) { }

  ngOnInit() {
    this.compra = (JSON.parse(localStorage.getItem('cartShop'))).carrito;
    
    this.srv_categoria.getCategorias(0, 100).then(cat => {
      cat.subscribe(categoria => {
        this.categorias = categoria;  
      })
    });
    this.srv_marca.getMarcas(0, 100).then(marca => {
      marca.subscribe(resp => {
        this.marcas = resp;  
      })
    });
    this.srv_medida.getMedidas(0, 100).then(med => {
      med.subscribe(medida => {
        this.medidas = medida;  
      })
    });
    this.srv_producto.getProductos(0, 100).then(prod => {
      let productoTemp = prod.subscribe(producto => {
        this.productos = producto;  
        productoTemp.unsubscribe();
      })
    });

  }
  ordenarProductos(orden: string){
    this.srv_producto.obtenerProducto(orden, null, null).subscribe(resp => {
      this.productos = resp;
    });
  }
  limpiarFiltro(){}

  agregarACesta(item) {
    item.cantidad = 1;
    if( !item.cantidad || item.cantidad < 0){
      console.warn('debe definir una cantidad ')
      return

    }
    this.srv_cesta.addItemCart(item).subscribe(res => {
      this.compra = (JSON.parse(localStorage.getItem('cartShop'))).carrito;
    })
  }
  preview(id:string) {
    this.router.navigate(['producto/preview', id]);
  }

}
