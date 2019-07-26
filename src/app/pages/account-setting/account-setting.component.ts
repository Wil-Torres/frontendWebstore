import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings/settings.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DireccionComponent } from './componentes/direccion.component';
import { TarjetaComponent } from './componentes/tarjeta.component';
import { AddressService } from 'src/app/services/account/address.service';
import { DireccionCompra, TarjetaCompra } from 'src/app/interfaces/account-settings';
import { PaymentsService } from 'src/app/services/account/payments.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: [`
  .direccionS{
    font-size: small
  }
  .direccionXS{
    font-size: x-small
  }
  `]
})
export class AccountSettingComponent implements OnInit {

  
  private _objDirecciones : DireccionCompra[] = [];
  private _objMetodoPagos : TarjetaCompra[] = [];

  public get objDirecciones() : DireccionCompra[] {
    return this._objDirecciones;
  }
  public set objDirecciones(v : DireccionCompra[]) {
    this._objDirecciones = v;
  }
  public get objMetodoPagos() : TarjetaCompra[] {
    return this._objMetodoPagos;
  }
  public set objMetodoPagos(v : TarjetaCompra[]) {
    this._objMetodoPagos = v;
  }
  
  

  constructor( public srvAjuste: SettingsService,private modalService: BsModalService,
    private api: AddressService, private apiPago: PaymentsService) { }

  ngOnInit() {
    this.colocarCheck();
    this.obtenerDirecciones(0,100);
    this.obtenerMetodosPagos(0,100)
  }
  cambiarColor( tema: string, link: any ){
    this.aplicarCheck(link);
    this.srvAjuste.aplicarTema(tema);
  }
  aplicarCheck( link: any){
    let selectores: any = document.getElementsByClassName('selector');
    for( let ref of selectores){
      ref.classList.remove('working');
    }
    link.classList.add('working');

  }
  colocarCheck () {
    let selectores : any = document.getElementsByClassName('selector');
    let tema = this.srvAjuste.ajustes.tema;
    for( let ref of selectores){
      if( ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }


  }
  private modalRef: BsModalRef;
  agregarTarjeta() {
    this.modalRef = this.modalService.show(TarjetaComponent, {class: 'modal-lg'});
    
  }
  agregarDireccion() {
    this.modalRef = this.modalService.show(DireccionComponent, {class: 'modal-lg'});
    
  }

  obtenerDirecciones(offset:number = 0, limit: number = 100) {
    this.api.getDirecciones(offset, limit).then(resp => {
      resp.subscribe((dire:DireccionCompra[]) => {
        console.log(dire)
        this.objDirecciones = dire;
      })
      }).catch(err => {})
  }
  obtenerMetodosPagos(offset:number = 0, limit: number = 100) {
    this.apiPago.getTarjetas(offset, limit).then(metodo => {
      metodo.subscribe((pago:TarjetaCompra[]) => {
        console.log(pago)
        this.objMetodoPagos = pago;
      })
      }).catch(err => {})
  }

}
