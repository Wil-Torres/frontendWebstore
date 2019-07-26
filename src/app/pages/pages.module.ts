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
import { ListaOpcionesComponent } from './mantenimiento/otrasOpciones/lista-opciones.component';
import { ProcesoCompraComponent } from './movimiento/proceso-compra/proceso-compra.component';
import { CartShoppingComponent } from './movimiento/proceso-compra/cart-shopping.component';
import { DatosFacturacionComponent } from './movimiento/proceso-compra/datos-facturacion.component';
import { PaymentComponent } from './movimiento/proceso-compra/payment.component';
import { ReviewComponent } from './movimiento/proceso-compra/review.component';
import { ShippingComponent } from './movimiento/proceso-compra/shipping.component';
import { PedidoListaComponent } from './movimiento/pedido/pedido-lista.component';
import { PedidoModalComponent } from './movimiento/pedido/pedido-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { WishListComponent } from './mantenimiento/otrasOpciones/wish-list.component';
import { ListaComprasComponent } from './movimiento/compras/lista-compras.component';
import { NuevoEdicionComprasComponent } from './movimiento/compras/nuevo-edicion-compras.component';
import { NuevoEdicionVentasComponent } from './movimiento/ventas/nuevo-edicion-ventas.component';
import { ListaVentasComponent } from './movimiento/ventas/lista-ventas.component';
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { DireccionComponent } from './account-setting/componentes/direccion.component';
import { TarjetaComponent } from './account-setting/componentes/tarjeta.component';
import { PreviewProductoComponent } from './mantenimiento/producto/componenetes/preview-producto/preview-producto.component';

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
        NuevoEdicionProductosComponent,
        ListaOpcionesComponent,
        ProcesoCompraComponent,
        CartShoppingComponent,
        DatosFacturacionComponent,
        PaymentComponent,
        ReviewComponent,
        ShippingComponent,
        PedidoListaComponent,
        PedidoModalComponent,
        WishListComponent,
        ListaComprasComponent,
        NuevoEdicionComprasComponent,
        NuevoEdicionVentasComponent,
        ListaVentasComponent,
        DireccionComponent,
        TarjetaComponent,
        PreviewProductoComponent,
    ],
    exports: [
        HomeComponent,
        PagesComponent,
        AccountSettingComponent,
        MarcaListaComponent,
        MarcaNuevoEdicionComponent,
        TiendaComponent,
        ModalModule,
        ReactiveFormsModule,
        FormsModule
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot()
    ],
    entryComponents: [
        PedidoModalComponent,
        DireccionComponent,
        TarjetaComponent,
    ]
})

export class PagesModule {}