import { RouterModule, Routes  } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { AccountSettingComponent } from "./account-setting/account-setting.component";
import { TiendaComponent } from "./configuracion/tienda/tienda.component";
import { MarcaListaComponent } from './mantenimiento/marca/marca-lista.component';
import { MarcaNuevoEdicionComponent } from "./mantenimiento/marca/marca-nuevo-edicion.component";
import { ListaCategoriaComponent } from "./mantenimiento/categoria/lista-categoria.component";
import { NuevoEdicionCategoriaComponent } from "./mantenimiento/categoria/nuevo-edicion-categoria.component";
import { ListaMedidaComponent } from "./mantenimiento/medida/lista-medida.component";
import { NuevoEdicionMedidaComponent } from "./mantenimiento/medida/nuevo-edicion-medida.component";
import { ListaProductosComponent } from "./mantenimiento/producto/lista-productos.component";
import { NuevoEdicionProductosComponent } from "./mantenimiento/producto/nuevo-edicion-productos.component";
const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'home', component: HomeComponent, data:{titulo: 'Home'}},
            {path: 'account-settings', component: AccountSettingComponent, data:{titulo: 'Account Settings'}},
            {path: 'marcas/lista-marcas', component: MarcaListaComponent, data:{titulo: 'Marca'}},
            {path: 'marcas/nueva-marca', component: MarcaNuevoEdicionComponent, data:{titulo: 'Marca'}},
            {path: 'marcas/edicion-marca/:id', component: MarcaNuevoEdicionComponent, data:{titulo: 'Marca'}},
            {path: 'categorias/lista-categorias', component: ListaCategoriaComponent, data:{titulo: 'Categoria'}},
            {path: 'categorias/nueva-categoria', component: NuevoEdicionCategoriaComponent, data:{titulo: 'Categoria'}},
            {path: 'categorias/edicion-categoria/:id', component: NuevoEdicionCategoriaComponent, data:{titulo: 'Categoria'}},
            {path: 'medidas/lista-medidas', component: ListaMedidaComponent, data:{titulo: 'Medida'}},
            {path: 'medidas/nueva-medida', component: NuevoEdicionMedidaComponent, data:{titulo: 'Medida'}},
            {path: 'medidas/edicion-medida/:id', component: NuevoEdicionMedidaComponent, data:{titulo: 'Medida'}},
            {path: 'productos/lista-productos', component: ListaProductosComponent, data:{titulo: 'producto'}},
            {path: 'productos/nueva-producto', component: NuevoEdicionProductosComponent, data:{titulo: 'producto'}},
            {path: 'productos/edicion-producto/:id', component: NuevoEdicionProductosComponent, data:{titulo: 'producto'}},

            {path: 'configuracion', component: TiendaComponent, data:{titulo: 'Configuracion Tienda'}},
            {path: '', redirectTo: '/home', pathMatch: 'full'},
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );