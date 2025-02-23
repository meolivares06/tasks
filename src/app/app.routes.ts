import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login/login.component';
import { redirectIfLoggedGuard } from './core/guard/redirect-if-logged.guard';
import { redirectIfNotLoggedInGuard } from './core/guard/redirect-if-not-logged-in.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [redirectIfLoggedGuard],
  },
  {
    path: '',
    canActivate: [redirectIfNotLoggedInGuard],
    loadChildren: () =>
      import('./modules/layout/layout.routes').then((m) => m.layoutRoutes),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
