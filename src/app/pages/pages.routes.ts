import { RouterModule, Routes  } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { AccountSettingComponent } from "./account-setting/account-setting.component";
import { TiendaComponent } from "./configuracion/tienda/tienda.component";
import { MarcaListaComponent } from './mantenimiento/marca/marca-lista.component';
import { MarcaNuevoEdicionComponent } from "./mantenimiento/marca/marca-nuevo-edicion.component";
const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'home', component: HomeComponent, data:{titulo: 'Home'}},
            {path: 'account-settings', component: AccountSettingComponent, data:{titulo: 'Account Settings'}},
            {path: 'marcas/lista-marcas', component: MarcaListaComponent, data:{titulo: 'Marca'}},
            {path: 'marcas/nueva-marca', component: MarcaNuevoEdicionComponent, data:{titulo: 'Marca'}},
            {path: 'marcas/edicion-marca/:id', component: MarcaNuevoEdicionComponent},
            {path: 'configuracion', component: TiendaComponent, data:{titulo: 'Configuracion Tienda'}},
            {path: '', redirectTo: '/home', pathMatch: 'full'},
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );