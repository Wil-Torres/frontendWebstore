//  RUTAS PRINCIPALES
import { RouterModule, Routes } from '@angular/router'

// componentes para rutas principales
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [
    {path: '', component: PagesComponent}, // ruta principal
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: '/home', pathMatch: 'full'},
        ]
    },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NopagefoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true});