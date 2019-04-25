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

@NgModule({
    declarations: [
        HomeComponent,
        PagesComponent,
        AccountSettingComponent,
        MarcaListaComponent,
        MarcaNuevoEdicionComponent,
        TiendaComponent
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