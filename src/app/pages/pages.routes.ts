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
import { ListaOpcionesComponent } from "./mantenimiento/otrasOpciones/lista-opciones.component";
import { PedidoListaComponent } from "./movimiento/pedido/pedido-lista.component";
import { WishListComponent } from "./mantenimiento/otrasOpciones/wish-list.component";
import { ListaComprasComponent } from "./movimiento/compras/lista-compras.component";
import { NuevoEdicionComprasComponent } from "./movimiento/compras/nuevo-edicion-compras.component";
import { ListaVentasComponent } from "./movimiento/ventas/lista-ventas.component";
import { NuevoEdicionVentasComponent } from "./movimiento/ventas/nuevo-edicion-ventas.component";
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
            {path: 'opciones/lista', component: ListaOpcionesComponent, data:{titulo: 'Opciones'}},
            {path: 'pedidos', component: PedidoListaComponent, data:{titulo: 'Lista de Pedidos'}},
            {path: 'wishlist', component: WishListComponent, data:{titulo: 'Lista de Deseos'}},

            {path: 'compras/lista-compras', component: ListaComprasComponent, data:{titulo: 'Lista de Compras'}},
            {path: 'compras/nueva-compra', component: NuevoEdicionComprasComponent, data:{titulo: 'Nueva Compra'}},
            {path: 'compras/edicion-compra', component: NuevoEdicionComprasComponent, data:{titulo: 'Editar Compra'}},
            {path: 'ventas/lista-ventas', component: ListaVentasComponent, data:{titulo: 'Lista de Ventas'}},
            {path: 'ventas/nueva-venta', component: NuevoEdicionVentasComponent, data:{titulo: 'Nueva Venta'}},
            {path: 'ventas/edicion-venta', component: NuevoEdicionVentasComponent, data:{titulo: 'Editar Venta'}},
            {path: 'configuracion', component: TiendaComponent, data:{titulo: 'Configuracion Tienda'}},
            {path: '', redirectTo: '/home', pathMatch: 'full'},
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );