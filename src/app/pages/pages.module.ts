import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { PagesComponent } from "./pages.component";
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { MarcaListaComponent } from './mantenimiento/marca/marca-lista.component';
import { MarcaNuevoEdicionComponent } from "./mantenimiento/marca/marca-nuevo-edicion.component";
import { TiendaComponent } from "./configuracion/tienda/tienda.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { PAGES_ROUTES } from "./pages.routes";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { ListaCategoriaComponent } from './mantenimiento/categoria/lista-categoria.component';
import { NuevoEdicionCategoriaComponent } from './mantenimiento/categoria/nuevo-edicion-categoria.component';
import { NuevoEdicionMedidaComponent } from './mantenimiento/medida/nuevo-edicion-medida.component';
import { ListaMedidaComponent } from './mantenimiento/medida/lista-medida.component';
import { ListaProductosComponent } from './mantenimiento/producto/lista-productos.component';
import { NuevoEdicionProductosComponent } from './mantenimiento/producto/nuevo-edicion-productos.component';

@NgModule({
    declarations: [
        HomeComponent,
        PagesComponent,
        AccountSettingComponent,
        MarcaListaComponent,
        MarcaNuevoEdicionComponent,
        TiendaComponent,
        ListaCategoriaComponent,
        NuevoEdicionCategoriaComponent,
        NuevoEdicionMedidaComponent,
        ListaMedidaComponent,
        ListaProductosComponent,
        NuevoEdicionProductosComponent
    ],
    exports: [
        HomeComponent,
        PagesComponent,
        AccountSettingComponent,
        MarcaListaComponent,
        MarcaNuevoEdicionComponent,
        TiendaComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ]
})

export class PagesModule {}