import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { PagesComponent } from "./pages.component";
import { SharedModule } from "../shared/shared.module";
import { PAGES_ROUTES } from "./pages.routes";

@NgModule({
    declarations: [
        HomeComponent,
        PagesComponent
    ],
    exports: [
        HomeComponent,
        PagesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule {}