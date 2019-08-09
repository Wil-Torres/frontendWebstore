import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/autentication/auth.service';
import { isNil } from 'lodash';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BusquedaTopProductosComponent } from '../shared/componentes/busqueda-top-productos/busqueda-top-productos.component';

declare function init_plugins();
var $$;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {
  private loggin: boolean = false;
  private modalRef: BsModalRef;
  var = 'xuz'

  constructor(private srvAuth: AuthService, private modalService: BsModalService) {
    this.srvAuth.user.subscribe(auth => {
      if (auth == null) {
        let barraIzquierda: any = document.getElementById('idSidebar');
        barraIzquierda.classList.add('noVisible');
        let reajueste: any = document.getElementById('idWrapper');
        reajueste.classList.remove('page-wrapper');
      }
    })
  }

  ngOnInit() {
    init_plugins();
    console.log('inicializa app');
  }

  descargar() {
    const pdf: PdfMakeWrapper = new PdfMakeWrapper();

    pdf.add(
      { text: 'Tables', style: 'header' });
    pdf.add({
      style: 'tableExample',
      table: {
        headerRows: 1,
        widths: [100, 200, 200],
        body: [
          [
            { text: 'Header 1', style: 'tableHeader' },
            { text: 'Header 2', style: 'tableHeader' },
            { text: 'Header 3', style: 'tableHeader' }
          ],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
        ]
      },
      layout: 'headerLineOnly'
    })
    pdf.styles({
      header: {
        fontSize: 18,
        bold: true,
        'margin-left': 0,
        'margin-right': 0,
        'margin-top': 0,
        'margin-bottom': 10
      },
      subheader: {
        fontSize: 16,
        bold: true,
        'margin-left': 0,
        'margin-right': 10,
        'margin-top': 0,
        'margin-bottom': 5
      },
      tableExample: {
        'margin-left': 0,
        'margin-right': 5,
        'margin-top': 0,
        'margin-bottom': 15
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'white',
        fillColor: '#337ab7',
      }
    })
    pdf.create().open();

  }

  ngOnDestroy() {
    let panelDerecho: any = document.getElementById('idSidebar');
    if (!isNil(panelDerecho)) {
      panelDerecho.classList.remove('noVisible');
    }
    let panelCentral: any = document.getElementById('idWrapper');
    if (!isNil(panelCentral)) {
      panelCentral.classList.add('page-wrapper');
    }
  }

  adminBanners() {
    const opciones = {
      initialState: {},
      class: 'modal-lg'
    };
    this.modalRef = this.modalService.show(BusquedaTopProductosComponent, opciones);

  }

}
