import { RouterModule, Routes  } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { AccountSettingComponent } from "./account-setting/account-setting.component";
const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'home', component: HomeComponent, data:{titulo: 'Home'}},
            {path: 'account-settings', component: AccountSettingComponent, data:{titulo: 'Account Settings'}},
            {path: '', redirectTo: '/home', pathMatch: 'full'},
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );