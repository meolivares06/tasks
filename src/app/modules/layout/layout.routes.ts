import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { LeftnavComponent } from '../../leftnav/leftnav.component';

export const layoutRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'tasks',
        component: LeftnavComponent,
      },
    ],
  },
];
