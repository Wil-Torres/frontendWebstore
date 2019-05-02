import { NgModule } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { EncabezadoPaginaComponent } from './componentes/encabezado-pagina/encabezado-pagina.component';
import { PaginacionComponent } from './componentes/paginacion/paginacion.component';
import { BusquedaListaComponent } from './componentes/busqueda-lista/busqueda-lista.component';
import { PaginationModule } from "ngx-bootstrap/pagination";
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BotonNuevoComponent } from './componentes/encabezado-pagina/boton-nuevo.component';
import { BotonEliminaComponent } from './componentes/encabezado-pagina/boton-elimina.component';
import { BotonGuardaComponent } from './componentes/encabezado-pagina/boton-guarda.component';
import { BotonImprimeComponent } from './componentes/encabezado-pagina/boton-imprime.component';
import { BotonEditaComponent } from './componentes/encabezado-pagina/boton-edita.component';
import { BotonRefrescaComponent } from './componentes/encabezado-pagina/boton-refresca.component';
import { BotonRegresaComponent } from './componentes/encabezado-pagina/boton-regresa.component';
import { BotonComponent } from './componentes/encabezado-pagina/boton.component';
import { BotonLimpiaComponent } from './componentes/encabezado-pagina/boton-limpia.component';
import { CestaComponent } from "../pages/movimiento/cesta/cesta.component";
import {NgxWebstorageModule} from 'ngx-webstorage';

@NgModule({
    declarations: [
        SidebarComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        NopagefoundComponent,
        EncabezadoPaginaComponent,
        PaginacionComponent,
        BusquedaListaComponent,
        BotonNuevoComponent,
        BotonEliminaComponent,
        BotonGuardaComponent,
        BotonImprimeComponent,
        BotonEditaComponent,
        BotonRefrescaComponent,
        BotonRegresaComponent,
        BotonComponent,
        BotonLimpiaComponent,
        CestaComponent
    ],
    exports: [
        SidebarComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        NopagefoundComponent,
        EncabezadoPaginaComponent,
        PaginacionComponent,
        BusquedaListaComponent,
        BotonNuevoComponent,
        BotonEliminaComponent,
        BotonGuardaComponent,
        BotonImprimeComponent,
        BotonEditaComponent,
        BotonRefrescaComponent,
        BotonRegresaComponent,
        BotonComponent,
        CestaComponent
    ],
    imports:[
        RouterModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        PaginationModule.forRoot(),
        ModalModule.forRoot(),
        NgxWebstorageModule.forRoot(),
    ]
})
export class SharedModule {}