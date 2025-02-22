import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./routing-modules/routes/routes-routing.module').then(m => m.RoutesRoutingModule) },
];
