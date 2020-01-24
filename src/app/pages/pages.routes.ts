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
import { ProcesoCompraComponent } from "./movimiento/proceso-compra/proceso-compra.component";
import { AuthGuard } from "../services/autentication/auth.guard";
import { PreviewProductoComponent } from "./mantenimiento/producto/componenetes/preview-producto/preview-producto.component";
import { BusquedaComponent } from "./busqueda/busqueda.component";
const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'home', component: HomeComponent, data:{titulo: 'Home'}},
            {path: 'search-items', component: BusquedaComponent, data:{titulo: 'Search item'}},
            {path: 'account-settings', component: AccountSettingComponent, data:{titulo: 'Account Settings'}, canActivate: [AuthGuard]},
            {path: 'marcas/lista-marcas', component: MarcaListaComponent, data:{titulo: 'Marca'}, canActivate: [AuthGuard]},
            {path: 'marcas/nueva-marca', component: MarcaNuevoEdicionComponent, data:{titulo: 'Marca'}, canActivate: [AuthGuard]},
            {path: 'marcas/edicion-marca/:id', component: MarcaNuevoEdicionComponent, data:{titulo: 'Marca'}, canActivate: [AuthGuard]},
            {path: 'categorias/lista-categorias', component: ListaCategoriaComponent, data:{titulo: 'Categoria'}, canActivate: [AuthGuard]},
            {path: 'categorias/nueva-categoria', component: NuevoEdicionCategoriaComponent, data:{titulo: 'Categoria'}, canActivate: [AuthGuard]},
            {path: 'categorias/edicion-categoria/:id', component: NuevoEdicionCategoriaComponent, data:{titulo: 'Categoria'}, canActivate: [AuthGuard]},
            {path: 'medidas/lista-medidas', component: ListaMedidaComponent, data:{titulo: 'Medida'}, canActivate: [AuthGuard]},
            {path: 'medidas/nueva-medida', component: NuevoEdicionMedidaComponent, data:{titulo: 'Medida'}, canActivate: [AuthGuard]},
            {path: 'medidas/edicion-medida/:id', component: NuevoEdicionMedidaComponent, data:{titulo: 'Medida'}, canActivate: [AuthGuard]},
            {path: 'productos/lista-productos', component: ListaProductosComponent, data:{titulo: 'producto'}, canActivate: [AuthGuard]},
            {path: 'productos/nueva-producto', component: NuevoEdicionProductosComponent, data:{titulo: 'producto'}, canActivate: [AuthGuard]},
            {path: 'productos/edicion-producto/:id', component: NuevoEdicionProductosComponent, data:{titulo: 'producto'}, canActivate: [AuthGuard]},
            {path: 'producto/preview/:id', component: PreviewProductoComponent},
            {path: 'opciones/lista', component: ListaOpcionesComponent, data:{titulo: 'Opciones'}, canActivate: [AuthGuard]},
            {path: 'pedidos', component: PedidoListaComponent, data:{titulo: 'Lista de Pedidos'}, canActivate: [AuthGuard]},
            {path: 'wishlist', component: WishListComponent, data:{titulo: 'Lista de Deseos'}, canActivate: [AuthGuard]},

            {path: 'procesar', component: ProcesoCompraComponent, data:{titulo: 'Procesando Compra'}, canActivate: [AuthGuard]},

            {path: 'compras/lista-compras', component: ListaComprasComponent, data:{titulo: 'Lista de Compras'}, canActivate: [AuthGuard]},
            {path: 'compras/nueva-compra', component: NuevoEdicionComprasComponent, data:{titulo: 'Nueva Compra'}, canActivate: [AuthGuard]},
            {path: 'compras/edicion-compra/:id', component: NuevoEdicionComprasComponent, data:{titulo: 'Editar Compra'}, canActivate: [AuthGuard]},
            {path: 'ventas/lista-ventas', component: ListaVentasComponent, data:{titulo: 'Lista de Ventas'}, canActivate: [AuthGuard]},
            {path: 'ventas/nueva-venta', component: NuevoEdicionVentasComponent, data:{titulo: 'Nueva Venta'}, canActivate: [AuthGuard]},
            {path: 'ventas/edicion-venta/:id', component: NuevoEdicionVentasComponent, data:{titulo: 'Editar Venta'}, canActivate: [AuthGuard]},
            {path: 'configuracion', component: TiendaComponent, data:{titulo: 'Configuracion Tienda'}, canActivate: [AuthGuard]},
            {path: '', redirectTo: '/home', pathMatch: 'full'},
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );