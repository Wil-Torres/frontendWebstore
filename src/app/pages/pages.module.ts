import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { PagesComponent } from "./pages.component";
import { SharedModule } from "../shared/shared.module";
import { PAGES_ROUTES } from "./pages.routes";
import { AccountSettingComponent } from './account-setting/account-setting.component';

@NgModule({
    declarations: [
        HomeComponent,
        PagesComponent,
        AccountSettingComponent
    ],
    exports: [
        HomeComponent,
        PagesComponent,
        AccountSettingComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule {}